window.onload=function(){
	var name = document.getElementById("name");
	var send_message = document.getElementsByClassName("send_message_button")[0];
	var input= document.getElementById("myInput");

 	send_message.addEventListener("click", function(){
	
		document.getElementById('msg').style.display = "block";
	
	})

 	input.addEventListener("keyup", function(){

 		let images = document.getElementsByClassName("whole-card")
 		let search = document.getElementById("myInput");
 		filter = search.value.toUpperCase();
 		for (i = 0; i < images.length; i++)
	    {
	        txtValue = images[i].innerText;
	        if (txtValue.toUpperCase().indexOf(filter) > -1) 
	        {
	            images[i].style.display = "";
	        } else
	        {
	            images[i].style.display = "none";
	        }
	    }
 		
 	})

}
 