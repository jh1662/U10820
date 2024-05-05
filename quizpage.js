//#region this is the section that controls the buttons to change webpages
function openQuizPage(){
    window.location.href = "QuizPage.html"
}
function openHomePage(){
    window.location.href = "index.html";
}
function openContactPage(){
    window.location.href = "Contact.html";
}
function openAnswersDay() {
    window.open("https://www.canterbury.ac.uk/campaign/answers-day", "_blank");
}
function openXAccount() {
    window.open("https://twitter.com/i/flow/login?redirect_after_login=%2FCanterburyCCUni", "_blank");
}
function openFacebookAccount(){
    window.open("https://www.facebook.com/ChristChurchUni","_blank");
}
function openYoutubeAccount(){
    window.open("https://www.youtube.com/user/ChristChurchUni","_blank");
}
function openTiktokAccount(){
    window.open("https://www.tiktok.com/@canterburyccuni","_blank");
}
function openLinkedInAccount(){
    window.open("https://www.linkedin.com/school/canterbury-christ-church-university/","_blank");
}
function openInstPage() {
    window.open("https://www.instagram.com/canterburyccuni/?hl=en", "_blank");
}
function openCourses() {
    window.location.href ="Courses.html";
}
//#endregion

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
