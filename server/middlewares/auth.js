import jwt from 'jsonwebtoken';
import User from '../models/user.js'; // Assuming your User model is defined in this path

export const auth = async (req, res, next) => {
    try {
        const token =
            req.cookies.token ||
            req.body.token ||
            req.header("Authorization")?.replace("Bearer ", "");

        // If JWT is missing, return 401 Unauthorized response
        if (!token) {
            return res.status(401).json({ success: false, message: `Token Missing` });
        }
        try {
            // Verifying the JWT using the secret key stored in environment variables
            const decode = await jwt.verify(token, process.env.JWT_SECRET);

            // Extracting user ID from the decoded JWT payload
            const id = decode.id;

            // Finding the user in the database by ID
            const user = await User.findById(id);

            // If the user is not found, return 401 Unauthorized response
            if (!user) {
                return res.status(401).json({ success: false, message: "User not found" });
            }

            // Storing the user in the request object for further use
            req.user = user;
        } catch (error) {
            // If JWT verification fails, return 401 Unauthorized response
            return res.status(401).json({ success: false, message: "Token is invalid" });
        }

        // If JWT is valid, move on to the next middleware or request handler
        next();
    } catch (error) {
        // If there is an error during the authentication process, return 401 Unauthorized response
        return res.status(401).json({
            success: false,
            message: `Something went wrong while validating the token`,
        });
    }
};