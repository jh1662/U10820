//#region These are utilised to open each page across the website
function openQuizPage() {
    window.location.href = "QuizPage.html"
}
function openHomePage(){
    window.location.href = "index.html";
}
function openContactPage(){
    window.location.href = "Contact.html";
}
//#endregion
 
//#region These functions are utilised to open external links
function openAnswersDay() {
    window.open("https://www.canterbury.ac.uk/campaign/answers-day", "_blank");
}
function openXAccount() {
    window.open("https://twitter.com/i/flow/login?redirect_after_login=%2FCanterburyCCUni", "_blank");
}
function openInstPage() {
    window.open("https://www.instagram.com/canterburyccuni/?hl=en", "_blank");
}
function openCourses() {
    window.open("https://www.canterbury.ac.uk/study-here/subject-areas/engineering-and-computing", "_blank");
}
//#endregion


//#region this is a section of code to chnage the boxes content 
const questionBoxes1 = document.getElementById("textContent_1");
const currentText1 = questionBoxes1.textContent;
questionBoxes1.addEventListener("mouseover", () => {
    questionBoxes1.innerText = "this is the answer to the previous question that was there is just some random text to take up space and for me to see if the code works as intended";    
});
questionBoxes1.addEventListener("mouseleave", () => questionBoxes1.innerText = currentText1);

const questionBoxes2 = document.getElementById("textContent_2");
const currentText2 = questionBoxes2.textContent;
questionBoxes2.addEventListener("mouseover", () => {
    questionBoxes2.innerText = "sjbbad is the answer to the previous question that was there is just some random text to take up space and for me to see if the code works as intended";    
});
questionBoxes2.addEventListener("mouseleave", () => questionBoxes2.innerText = currentText2);

const questionBoxes3 = document.getElementById("textContent_3");
const currentText3 = questionBoxes3.textContent;
questionBoxes3.addEventListener("mouseover", () => {
    questionBoxes3.innerText = "knsadlkd is the answer to the previous question that was there is just some random text to take up space and for me to see if the code works as intended";    
});
questionBoxes3.addEventListener("mouseleave", () => questionBoxes3.innerText = currentText3);

const questionBoxes4 = document.getElementById("textContent_4");
const currentText4 = questionBoxes4.textContent;
questionBoxes4.addEventListener("mouseover", () => {
    questionBoxes4.innerText = "xn,cmzb is the answer to the previous question that was there is just some random text to take up space and for me to see if the code works as intended";    
});
questionBoxes4.addEventListener("mouseleave", () => questionBoxes4.innerText = currentText4);

const questionBoxes5 = document.getElementById("textContent_5");
const currentText5 = questionBoxes5.textContent;
questionBoxes5.addEventListener("mouseover", () => {
    questionBoxes5.innerText = "hsdoai is the answer to the previous question that was there is just some random text to take up space and for me to see if the code works as intended";    
});
questionBoxes5.addEventListener("mouseleave", () => questionBoxes5.innerText = currentText5);

const questionBoxes6 = document.getElementById("textContent_6");
const currentText6 = questionBoxes6.textContent;
questionBoxes6.addEventListener("mouseover", () => {
    questionBoxes6.innerText = "ioiipuop is the answer to the previous question that was there is just some random text to take up space and for me to see if the code works as intended";    
});
questionBoxes6.addEventListener("mouseleave", () => questionBoxes6.innerText = currentText6);

const questionBoxes7 = document.getElementById("textContent_7");
const currentText7 = questionBoxes7.textContent;
questionBoxes7.addEventListener("mouseover", () => {
    questionBoxes7.innerText = "qweqewqewq is the answer to the previous question that was there is just some random text to take up space and for me to see if the code works as intended";    
});
questionBoxes7.addEventListener("mouseleave", () => questionBoxes7.innerText = currentText7);

const questionBoxes8 = document.getElementById("textContent_8");
const currentText8 = questionBoxes8.textContent;
questionBoxes8.addEventListener("mouseover", () => {
    questionBoxes8.innerText = "/.,mnbvcxcvbnm, is the answer to the previous question that was there is just some random text to take up space and for me to see if the code works as intended";    
});
questionBoxes8.addEventListener("mouseleave", () => questionBoxes8.innerText = currentText8);

const questionBoxes9 = document.getElementById("textContent_9");
const currentText9 = questionBoxes9.textContent;
questionBoxes9.addEventListener("mouseover", () => {
    questionBoxes9.innerText = "1234567ytre is the answer to the previous question that was there is just some random text to take up space and for me to see if the code works as intended";    
});
questionBoxes9.addEventListener("mouseleave", () => questionBoxes9.innerText = currentText3);
//#endregion