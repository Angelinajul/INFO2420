var imgArray = new Array(
"CoupleBike3Lg.jpg",
"CoupleHikingLg.jpg",
"OwnerMotorCycleLg.jpg",
"ScubaCoupleLg.jpg"
);


var titleArray = new Array(
"Couple on a Bike",
"Couple Hicking",
"Owner on a Motorcycle",
"Couple Scuba Diving"
);



function swapImage(imgID)
{

var theImage=document.getElementById("theImage");

var text=document.getElementById("bottomText");


theImage.src="Images/" + imgArray[imgID];

text.innerHTML=titleArray[imgID];

}



function preloadImages()
{

for(var i=0;i<imgArray.length;i++)
{

var image=new Image();

image.src="Images/" + imgArray[i];

}

}