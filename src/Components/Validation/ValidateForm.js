export default function(values){
    let errors ={};
    const email_pattern =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
      
    if(values.email === ""){
        errors.email = "Field is required"
    }else if(!email_pattern.test(values.email)){
        errors.email = "Invalid Email"
    }else{
        errors.email =""
    }
    
    if(values.password === ""){
        errors.password ="Field required"
     } else if (values.password.length < 8) {
        errors.password = "Password Must be 8 characters and above"
      }
     
     else{
        errors.password = ""
    }
    return errors;
    }