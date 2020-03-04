function easterEgg(){alert("You discovered an Easter Egg, nice!");}//Easter Egg

//-------------------------C O N T A C T  F O R M--------------------------

function contactForm(form)
{
  console.log("Contact Form is Working");

  var firstName = document.getElementById('firstName').value;
  var email = document.getElementById('email').value;

  if(firstName, email == "")
  {
    alert("You're Missing Some Information In The Contact Form");
  }
  else
  {
  console.log(firstName +' '+email);
  document.getElementById('sentMessage').innerHTML="Message Sent";
  resetForm();
  sendMail();
  createTextFile();
  }
}

function resetForm(form)
{document.getElementById("contactform").reset();}

function sendMail(){}

function createTextFile()
{}

