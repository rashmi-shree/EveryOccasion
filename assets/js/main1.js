window.onload=function(){
	var name = document.getElementById("name")
	var send_message = document.getElementsByClassName("send_message_button")[0]
 	

 	send_message.addEventListener("click", function(){
	console.log(name.value);
	})

 }