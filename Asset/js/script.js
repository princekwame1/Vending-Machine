



//  var cancel1=document.getElementById("Cancel");
//   cancel1.addEventListener("click", function(){
       
       
//   });




  function dialcancel(){

  
inputCode.innerHTML=("");
pix.src=""     
input2.innerHTML="Enter Product Code:";
quantitylabel.innerHTML=""
changereturn.innerHTML=""
input3.innerHTML=""
  }



  btnConfirm=document.getElementById("Confirm")
  btnConfirm.addEventListener('click', function(){
 totalprice()

  })



 function clear(){
      document.getElementById('idle').innerHTML=""

}








function dial(key){
     clear()
  
    inputCode.innerHTML=inputCode.innerHTML+key;
    input2.innerHTML="";
 
}





var input2=document.getElementById("idle")
var inputCode=document.getElementById("screen");
 var input3=document.getElementById("cost")
 var pix=document.createElement("img")
 var u=document.getElementById("pic")
 var quantitylabel= document.getElementById('screen_quan')
var changereturn=document.getElementById("change")


var product1_name =[
"Venve Cliequot",
"Don Perignon Vintage 2008",
 "GH.Mumm",
 "RuinArtt",
 "KRUG Grande Cuvee ", 
 "BILLECART-SALMON",
"PERRIER-JOUET", 
"PIPER-HEIDSIECK",
 "LOUIS ROEDERER",
 "BOLLINGER LA GRANDE",
"Pol Roger",
"TAITTINGER",
"Arran Gold ",
"Smirnoff No. 21 Vodka",
 "Belvedere Vodka",
 "Bunnahabhain",
 "Jack daniels ", 
 "Haku Vodka",
"Kraken Black Spiced Rum", 
"Johnnie Walker",
 "Teeling Whiskey",
 "Glenmorangie",
"Amarula",
"Baileys Strawberry Cream"




]



 var product1_code =[
    "120",
    "121",
    "122",
    "123",
    "124",
    "125",
    "126",
    "127",
    "128",
    "129",
    "130",
    "131",
    "132",
    "133",
    "134",
    "135",
    "136",
    "137",
    "138",
    "139",
    "140",
    "141",
    "142",
    "143"
];



var product1_prize =[
    60,
    190,
    10,
    55,
    200,
    50,
    60,
    50,
    300,
    150,
    59,
    50,
    22,
    22.5,
    50,
    59,
    40,
    2012,
    30,
    180,
    49.99,
    42,
    18,
    27
];

var product1_image=[
  "Asset/images/drinks/IMG_6325.png",
  "Asset/images/drinks/IMG_6329.png",
  "Asset/images/drinks/IMG_6344.png",
  "Asset/images/drinks/IMG_6326.png",
  "Asset/images/drinks/IMG_6330.png",
  "Asset/images/drinks/IMG_6327.png",
  "Asset/images/drinks/IMG_6331.png",
  "Asset/images/drinks/IMG_6333.png",
  "Asset/images/drinks/IMG_6334 copy.png",
  "Asset/images/drinks/IMG_6323.png",
  "Asset/images/drinks/IMG_6324.png",
  "Asset/images/drinks/IMG_6328.png",
  "Asset/images/drinks/1.png",
  "Asset/images/drinks/2.png",
  "Asset/images/drinks/3.png",
  "Asset/images/drinks/5.png",
  "Asset/images/drinks/6.png",
  "Asset/images/drinks/7.png",
  "Asset/images/drinks/8.png",
  "Asset/images/drinks/9.png",
  "Asset/images/drinks/11.png",
  "Asset/images/drinks/12.png",
  "Asset/images/drinks/14.png",
  "Asset/images/drinks/13.png"
];


 function getproduct_details(){

  for(x=0; inputCode.innerHTML!=product1_code[x];x++);
 input2.innerHTML=product1_name[x];
 console.log(product1_prize[x])
 pix.src=product1_image[x]
  u.appendChild(pix)
  quantitylabel.innerHTML="Please Enter Quantity"
  inputCode.innerHTML=Number("")
  

}

 
 function totalprice(){
  var totalcost=(product1_prize[x]*inputCode.innerHTML)
  input3.innerHTML=totalcost
  quantitylabel.innerHTML="Please Enter Amount Received"
  inputCode.innerHTML=Number("")



 
}
 


 function return_change(){
  
console.log(inputCode.innerHTML)

 var change=(inputCode.innerHTML-input3.innerHTML)

 changereturn.innerHTML= change
 input2.innerHTML="Enter Product Code:"
 inputCode.innerHTML=""
 quantitylabel.innerHTML=""
}


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("sectionA");
if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  }
  slides[slideIndex-1].style.display = "flex";  
 
}





