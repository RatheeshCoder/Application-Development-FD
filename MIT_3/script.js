
var firstName = document.getElementById('firstName');
var lastName = document.getElementById('lastName');
var password = document.getElementById('password');
const errorFN = document.getElementById('errorFN');
const errorLN = document.getElementById('errorLN');
const errorEM = document.getElementById('errorEM');
const errorPS = document.getElementById('errorPW');



const handleFormValidation = () => {
  
    const pass = password.value;
    const user = firstName.value + ' ' + lastName.value;
  
    if (
        pass.length >= 6  &&
        /[a-z]/.test(pass) &&
        /[A-Z]/.test(pass) &&
        /[#.?!@$%^&*-]/.test(pass) &&
        pass !== user && pass.length <= 16
      
    ) {
        console.log(user);
      alert("test passed")
      return true;
    }
  
    else{
      

        errorFN.innerHTML="error in First name"
        errorLN.innerHTML="error in last name"
        errorEM.innerHTML="error in  email "
        errorPS.innerHTML="error in password"

    return false;
    }
  };

 
  
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const validForm = handleFormValidation();
  
    if (!validForm) {
      return false;
    }
  
    alert("Form submitted");
  });
  



