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
function isFav(id){
    const user = getUserData()
    let status=false;
    let data={
        email:user.email,
        id
    }
    let url = 'http://127.0.0.1:8080/api/isLiked'
    let settings = {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify( data )
    }
    fetch( url, settings )
                .then( response => {
                    if( response.ok ){
                       status=true;
                       return true;
                    }
                    else{
                        return false;
                    }
                })
                .catch( err => {
                    alert(err.message);
                })
    

}

export {isLoggedIn,LogOut,getUserData,isAdmin,isFav}