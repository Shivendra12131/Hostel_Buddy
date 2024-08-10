export async function addUser(user) {
    await new Promise(resolve => {
        localStorage.setItem('user', JSON.stringify(user));
        resolve();
    });
}

export function fetchUser() {
    const userString = localStorage.getItem('user');
    try {
        return userString ? JSON.parse(userString) : null; // Parse string to object
    } catch (error) {
        console.error('Error parsing user data:', error);
        return null;
    }
}

export async function deleteUser() {
    await new Promise(resolve => {
        localStorage.removeItem('user');
        resolve();
    });
}