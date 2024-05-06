
//#region this is the section that controls the buttons to change webpages
function openQuizPage(){
    window.location.href = "QuizPage.html"
}
function openHomePage(){
    window.location.href = "Homepage.html";
}
function openContactPage(){
    window.location.href = "Contact.html";
}
function openCourses() {
    window.location.href ="Courses.php";
}
//#endregion

//#region These functions are utilised to open external links
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
//#endregion

//#region this is a section of code to change the boxes content
const questionBoxes1 = document.getElementById("textContent_1");
const currentText1 = questionBoxes1.textContent;
questionBoxes1.addEventListener("mouseover", () => {
    questionBoxes1.innerText = "Requirements vary by program. Generally, undergraduates need A-levels or equivalent, while graduates need a bachelor's degree. Additional requirements may include personal statements, references, and interviews.";
});
questionBoxes1.addEventListener("mouseleave", () => questionBoxes1.innerText = currentText1);

const questionBoxes2 = document.getElementById("textContent_2");
const currentText2 = questionBoxes2.textContent;
questionBoxes2.addEventListener("mouseover", () => {
    questionBoxes2.innerText = "We offer scholarships, grants, loans, and work-study programs. Eligibility is based on factors like financial need, academic performance, and residency status.";
});
questionBoxes2.addEventListener("mouseleave", () => questionBoxes2.innerText = currentText2);

const questionBoxes3 = document.getElementById("textContent_3");
const currentText3 = questionBoxes3.textContent;
questionBoxes3.addEventListener("mouseover", () => {
    questionBoxes3.innerText = "We provide tutoring, advising, career counseling and academic mentoring. Our aim is to help students excel academically and personally.";
});
questionBoxes3.addEventListener("mouseleave", () => questionBoxes3.innerText = currentText3);

const questionBoxes4 = document.getElementById("textContent_4");
const currentText4 = questionBoxes4.textContent;
questionBoxes4.addEventListener("mouseover", () => {
    questionBoxes4.innerText = "We have diverse clubs, societies, and events catering to various interests. From sports to cultural activities, there's something for everyone. Explore our vibrant campus community!";
});
questionBoxes4.addEventListener("mouseleave", () => questionBoxes4.innerText = currentText4);

const questionBoxes5 = document.getElementById("textContent_5");
const currentText5 = questionBoxes5.textContent;
questionBoxes5.addEventListener("mouseover", () => {
    questionBoxes5.innerText = "Undergraduates can engage in research projects with faculty mentorship. This hands-on experience enhances learning and prepares students for future careers.";
});
questionBoxes5.addEventListener("mouseleave", () => questionBoxes5.innerText = currentText5);

const questionBoxes6 = document.getElementById("textContent_6");
const currentText6 = questionBoxes6.textContent;
questionBoxes6.addEventListener("mouseover", () => {
    questionBoxes6.innerText = "You are able to contact professors in numerous ways such as through email, messaging on blackboard or by going to their office, you are also able to schedule one on one meetings with proffesors.";
});
questionBoxes6.addEventListener("mouseleave", () => questionBoxes6.innerText = currentText6);

const questionBoxes7 = document.getElementById("textContent_7");
const currentText7 = questionBoxes7.textContent;
questionBoxes7.addEventListener("mouseover", () => {
    questionBoxes7.innerText = "Our career center provides guidance on resumes, interviews, and job searches. We host career fairs, networking events, and offer internship opportunities to prepare students for the workforce.";
});
questionBoxes7.addEventListener("mouseleave", () => questionBoxes7.innerText = currentText7);

const questionBoxes8 = document.getElementById("textContent_8");
const currentText8 = questionBoxes8.textContent;
questionBoxes8.addEventListener("mouseover", () => {
    questionBoxes8.innerText = "We offer various off-campus accommodations and amenities, including dining facilities, recreational centers, libraries";
});
questionBoxes8.addEventListener("mouseleave", () => questionBoxes8.innerText = currentText8);

const questionBoxes9 = document.getElementById("textContent_9");
const currentText9 = questionBoxes9.textContent;
questionBoxes9.addEventListener("mouseover", () => {
    questionBoxes9.innerText = "Diversity, equity, and inclusion are central to our values. We provide programs, resources, and support services to foster a welcoming and inclusive campus community for all.";
});
questionBoxes9.addEventListener("mouseleave", () => questionBoxes9.innerText = currentText3);
//#endregion
