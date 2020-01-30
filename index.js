var email=document.querySelector(".email");
var emailMsg=document.getElementById('e-mail');


var btn=document.querySelector(".button");

btn.addEventListener('click', formValitation);
function formValitation(e){
  if(!email.value)
  {
    errorMessage(email, emailMsg);
  }
  else{
    successMessage(email, emailMsg);
  }
    e.preventDefault();
  }
  function errorMessage(input, message){
        message.style.color = "red";
        message.style.font = "italic";
        input.style.border = " solid hsl(0, 100%, 74%)";
        input.placeholder = "         Enter Your Email";
        input.style.background = "url(images/error3.png)  no-repeat left";



     }
     function successMessage(input, message){
         message.style.color = 'white';
         input.style.border = "solid #f1fcfc";
         input.style.background = "";
        }
