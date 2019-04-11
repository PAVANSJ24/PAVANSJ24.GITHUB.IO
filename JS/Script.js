var config = {
    apiKey: "AIzaSyB1GUJ1ZMggDfhvmmWLz4F2WuzNsLAx8Dk",
    authDomain: "personalportfolio-44cb1.firebaseapp.com",
    databaseURL: "https://personalportfolio-44cb1.firebaseio.com",
    projectId: "personalportfolio-44cb1",
    storageBucket: "gs://personalportfolio-44cb1.appspot.com\n",
    messagingSenderId: "180031072613"
};
firebase.initializeApp(config);
//get references to th 3 html elments on the page
var uploader = document.getElementById("uploader");
var storage = firebase.storage();

function adduser(){
    alert("adding user!");
    var email=document.getElementById("add_user").value;
    var password = document.getElementById("add_pass").value;

    firebase.auth().createUserWithEmailAndPassword(email,
        password).catch(function(error) {
        //
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("error"+ error.message);
        //...
    });
}





const download = document.getElementById("fileRequest");

download.addEventListener('click', request);

function request() {
    window.location = '../PDFs/Resume.pdf';
}


function speilbergimage() {
    document.querySelector("img[id*='Spielberg']").src="../IMAGES/Spielberg.jpg"
    document.querySelector("h5[id*='title']").textContent="Steven Spielberg"
    document.querySelector("p[id*='text']").textContent="Steven was highly determined and knew what he wanted from a young age.So, he took every opportunity he could to grow as a film maker and gain valuable knowledge from others.Can you believe that he even snuck into a filming of a real movie at the age of 17 while on a tour at Universal Studios? After that, hespent his summers meeting directors, writers, and editors and learning from every conversation he had.Steven had many challenges along the way including being rejectedby the University of California of Cinematic A."

}

function seuss() {
    document.querySelector("img[id*='Spielberg']").src="../IMAGES/Seuss1.png"
    document.querySelector("h5[id*='title']").textContent="Dr.Seuss"
    document.querySelector("p[id*='text']").textContent="Dr. Seuss is an incredibly successful person You probably grew up reading his books such as ‘The Cat in the Hat’ and ‘Green Eggs and Ham’.But did you know that his first children’s book “And To Think That I Saw It On Mulberry Street” was refused by 27 publishers?It’s clear that Dr Seuss didn’t just take no for an answer. Like Colonel Sanders, he persevered until he finally heard that “yes!”"


}
