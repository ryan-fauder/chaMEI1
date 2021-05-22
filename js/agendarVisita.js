var button = document.querySelector("#scheduleMeeting");
var message = document.querySelector("#scheduleMessage");
button.addEventListener("click", function(){
  message.classList.remove("display-none");
  setTimeout(function(){
    message.classList.add("display-none");
  }, 5000);
});