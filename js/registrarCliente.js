var button_send = document.querySelector("#register-user-button");


function getInput(id){
  var input = document.querySelector(id);
  return input.value;
}

button_send.addEventListener("click", function(){
  var current_email = getInput("#email-user");
  var current_pass = getInput("#password-user");
  if(current_email == null || current_pass == null){
    alert("Preencha os campos necessários");
    return;
  }
   var users = JSON.parse(localStorage.getItem("users"));
   if(users == null){
     users = [];
   }
  users.push([current_email, current_pass]);
  localStorage.setItem("users",JSON.stringify(users));
});