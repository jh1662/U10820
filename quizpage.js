// READ ME: If you want to change the img count in the "image/sernario/" folder, change the number in the line below vv
const imgNumMax = 7;

var imgNum = 0;
setUpImg();

function revealAll(){
    document.getElementById("imgSub").src=`images/answers/${imgNum}.png`;
}
function setUpImg(){
    document.getElementById("imgSub").src=`images/sernario/${imgNum}.png`;
    document.getElementById("quizTip").innerHTML="Could you identify aspects of engineering in this image?";
    //document.getElementById("imgSub").style.height = "100px";
    //document.getElementById("imgSub").style.width = "100px";
}
function previousImg(){
    switch(imgNum){
        case 0: document.getElementById("quizTip").innerHTML="Can't go back, this is the first image."; break;
        default: 
            imgNum--; 
            setUpImg();
    }
}
function nextImg(){
    switch(imgNum){
        case imgNumMax: document.getElementById("quizTip").innerHTML="You already seen all the imges."; break;
        default: 
            imgNum++
            setUpImg();
    }
}