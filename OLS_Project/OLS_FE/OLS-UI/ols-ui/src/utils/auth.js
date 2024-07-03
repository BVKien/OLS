export const saveUserToLocalStorage = (user, expirationTime) => {
    const userObject = {
      user,
      expiresAt: new Date().getTime() + expirationTime * 1000, 
    };
    localStorage.setItem('user', JSON.stringify(userObject));
  };