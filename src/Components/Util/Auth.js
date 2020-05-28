import jwtDecode from 'jwt-decode';
function isLoggedIn(){
    let token = localStorage.getItem('token');
    
    if(token){
        let tokenExpiration = jwtDecode(token).exp;
            let dateNow = new Date();

            if(tokenExpiration < dateNow.getTime()/1000){
                LogOut();
                return false;
            }else{
                return true;
            }
    }
    else{
        
        return false;
    }
}
function isAdmin(){
    let token = localStorage.getItem('token');
    
    if(token){
        let tokenExpiration = jwtDecode(token).exp;
            let dateNow = new Date();

            if(tokenExpiration < dateNow.getTime()/1000){
                LogOut();
                return false;
            }else{
                if(jwtDecode(token).type === 'admin')
                    return true;
                else
                    return false;
            }
    }
    else{
        
        return false;
    }
}
function LogOut(){
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    window.location.href = "/";

}
function getUserData(){
    let email;
    let name;
    let last_name;
    let token = localStorage.getItem('token');
    
    if(token){
        email = jwtDecode(token).email;
        name = jwtDecode(token).name;
        last_name = jwtDecode(token).last_name;

        let data = {
            name,
            email,
            last_name
        }

        return data;
    }
    else{
        return false;
    }
}


export {isLoggedIn,LogOut,getUserData,isAdmin}