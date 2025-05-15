export const login = async(authDetail) => {
    const accessToken = 'tokenxample1234';
    
        if (authDetail.password){
        localStorage.setItem('token', JSON.stringify(accessToken));
        localStorage.setItem('email', JSON.stringify(authDetail.email));

           
        }
        return {...authDetail, accessToken};

}
export const register = async(authDetail) => {

    const accessToken = 'tokenxample1234';
   
        if (authDetail.password){
            localStorage.setItem('token', JSON.stringify(accessToken));
            localStorage.setItem('email', JSON.stringify(authDetail.email));    
        }
    return {...authDetail, accessToken};
}

export const logout = async() => {
        localStorage.removeItem('token');

}