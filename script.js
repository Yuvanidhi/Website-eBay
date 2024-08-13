function validate(){
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    let msg=document.getElementById("msg");

    msg.style.color="red";
    if(username==""){
        msg.textContent="Enter Username";
        return false;
    }
    else if(password==""){
        msg.textContent="Enter Password";
        return false;   
    } 
    else if(password.length<6){
        msg.textContent="Password length should be greater than 6";
        return false;   
    }
    else{
        return true;
    }
    
}