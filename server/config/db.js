import mongoose from 'mongoose'

function connectToDB() {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "HostelBuddy"
      })
      .then(() => {
        console.log('MongoDB connected! 🌟');
      })
      .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
      });
}

export default connectToDB;