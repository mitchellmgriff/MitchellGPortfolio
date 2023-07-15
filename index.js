

function sendEmail() {
	Email.send({
	Host: "smtp.elasticemail.com",
	Username : "mitchellmgriff@gmail.com",
	Password : "F02C198F4FBFA71E817C4726381FE0F23E59",
	To : 'mitchellmgriff@gmail.com',
	From : "mitchellmgriff@gmail.com",
	Subject : document.getElementById("fName").value,
	Body : document.getElementById("message").value,
	}).then(
		message => alert("mail sent successfully")
	);
}


function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
