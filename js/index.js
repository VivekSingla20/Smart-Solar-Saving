function open_btn() {
    document.getElementById("popup1").style.display = "block";
    document.getElementById("popup2").style.display = "none";

}
function close_btn(){
    document.getElementById("popup1").style.display = "none";

}
function submitted_alert(){
    document.getElementById("popup1").style.display = "none";
    var email_id = document.getElementById("email").value;
    alert("Data for user "+email_id+" is submitted successfully.");
    document.getElementById("email").value="";
    document.getElementById("password").value="";
}



function open_btn2() {
    document.getElementById("popup2").style.display = "block";
    document.getElementById("popup1").style.display = "none";
}
function close_btn2(){
    document.getElementById("popup2").style.display = "none";

}
function submitted_alert2(){
    document.getElementById("popup2").style.display = "none";
    var email_id = document.getElementById("email").value;
    alert("Data for user "+email_id+" is submitted successfully.");
    document.getElementById("email").value="";
    document.getElementById("password").value="";
}

function calculate()
{
var rate = document.getElementById("kwh_rate").value;
var area = document.getElementById("area_roof").value;
var average = Number(document.getElementById("kwh_used").value) + Number(document.getElementById("kwh_used1").value) + Number(document.getElementById("kwh_used2").value );
average = Number(average/3);
var answer = ((area * 0.225)-average)*rate;
answer = Number(answer);
if(answer>0)
{
  alert("Congratulations you will save "+answer+" Rs per month!!");
}
else{
  alert("Sorry , You have to increase area to save money to a standard Solar panel ");
}
// alert(answer);
// const newPage = open("page2.html");
// newPage.addEventListener('page2ContentLoaded', () => {
//     newPage.document.getElementById("message_window").innerHTML="Congratulations , you have saved "+String(answer) +" Rs";
// })
// newPage.document.getElementById("message_window").innerHTML= "Congratulations , you have saved "+String(answer) +" Rs";
// console.log("Congratulations , you have saved "+String(answer) +" Rs");
}

//image slider
// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }



