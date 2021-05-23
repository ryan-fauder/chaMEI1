var button_send = document.querySelector("#login-user-button");


function getInput(id){
  var input = document.querySelector(id);
  return input.textContent;
}

button_send.addEventListener("click", function(){
  
  var users = JSON.parse(localStorage.getItem("users"));
  if(users == null){
    alert("Registre-se primeiro");
    return;
  }
  var current_email = getInput("#email-user");
  var current_pass = getInput("#password-user");

  users.foreach(function(email, pass){
    console.log(email, pass);
  })
});