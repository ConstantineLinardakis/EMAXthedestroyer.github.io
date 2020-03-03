import React from 'react';
import ReactDOM from 'react-dom';
function easterEgg(){alert("You discovered an Easter Egg, nice!");}//Easter Egg

//-------------------------C O N T A C T  F O R M--------------------------

function contactForm(form)
{
  console.log("Contact Form is Working");

  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var email = document.getElementById('email').value;

  if(firstName, lastName, email == "")
  {
    alert("You're Missing Some Information In The Contact Form");
  }
  else
  {
  console.log(firstName +' '+lastName+' '+email);
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

function App()
{
  return
  (
    <Layout>
      <p>Trying React JS</p>
    </Layout>
  );
}
