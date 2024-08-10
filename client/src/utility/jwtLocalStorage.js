export async function addToken(jwtToken) {
    await new Promise(resolve => {
        localStorage.setItem('jwt', jwtToken);
        resolve();
    });
}

export  function fetchToken() {
    return  localStorage.getItem('jwt');    
}

export async function deleteToken() {
    await new Promise(resolve => {
        localStorage.removeItem('jwt');
        resolve();
    });
}