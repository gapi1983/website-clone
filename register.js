
    //let email=document.getElementById("email").value;
    //let name=document.getElementById("name").value
    //let password1=document.getElementById("password1").value
    //let password2=document.getElementById("password2").value
    //let telnum=document.getElementById("telnum").value


    


    function validateEmail(){
        let mail = document.getElementById("email").value;

        let regex=/^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/

        if(regex.test(mail)){
            
            return true;
        }
        else{
            
            return false;
        }
    }

    function validateName(){
        let regName = /^[a-zA-Ž]+ [a-zA-Ž]+$/;
        let name = document.getElementById('name').value;
        if(!regName.test(name)){
            alert('Please enter your full name (first & last name).');
            document.getElementById('name').focus();
            return false;
        }else{
            
            return true;
        }
    }
    function validatePassword(){
        let passwordInput = document.getElementById("password1");
        let regPassword =  /^(?=.*\d)(?=.*[a-ž])(?=.*[A-Ž]).{6,20}$/;
        if(passwordInput.value.match(regPassword)){
            return true;
        }
        else{
            alert("password must contain at least 6 characters 1 uppercase 1 lowercase 1 digit");
            return false;
        }

        
    }

    function validateAll(){
        let passwordInput = document.getElementById("password1").value;
        let passwordInput2 = document.getElementById("password2").value;
        let checkbox = document.getElementById("checkbox")
        if(validatePassword()===true && validateName()===true && validateEmail()===true){  // v funkcjo validateAll daj vse funcije validate preveri tudi če se gesli ujemata .
            alert("yay")
            console.log(passwordInput)
            console.log(passwordInput2)
        }
        else if(validatePassword()===false){
            alert("psw wrong")
        }
        else if(validateName()===false){
            alert("name wrong")
        }
        else if(validateEmail()===false){
            alert("email wrong")
        }
        
        if(passwordInput!==passwordInput2){
            alert("passwords do not match")
        }

        if(checkbox.checked){
            alert("checked")
        }
        else{
            alert("not checked")
        }
        
        
    }





