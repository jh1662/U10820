
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
    questionBoxes1.innerText = "Canterbury punting tours offer a peaceful journey along the River Stour, showcasing the city's medieval architecture and history with knowledgeable guides.";
});
questionBoxes1.addEventListener("mouseleave", () => questionBoxes1.innerText = currentText1);

const questionBoxes2 = document.getElementById("textContent_2");
const currentText2 = questionBoxes2.textContent;
questionBoxes2.addEventListener("mouseover", () => {
    questionBoxes2.innerText = "Canterbury West Station (est 1846) symbolizes Victorian architectural splendor and the pivotal role of railways in Canterbury's growth. It has catalyzed trade and tourism, embodying the city's historical evolution and modern vitality.";
});
questionBoxes2.addEventListener("mouseleave", () => questionBoxes2.innerText = currentText2);

const questionBoxes3 = document.getElementById("textContent_3");
const currentText3 = questionBoxes3.textContent;
questionBoxes3.addEventListener("mouseover", () => {
    questionBoxes3.innerText = "St. Lawrence Grounds in Canterbury has been a historic cricket venue since the 1840s, hosting memorable matches and events. Its legacy and picturesque setting make it a beloved destination for cricket enthusiasts and locals alike.";
});
questionBoxes3.addEventListener("mouseleave", () => questionBoxes3.innerText = currentText3);

const questionBoxes4 = document.getElementById("textContent_4");
const currentText4 = questionBoxes4.textContent;
questionBoxes4.addEventListener("mouseover", () => {
    questionBoxes4.innerText = "Canterbury's medieval city walls, built from Roman times and extensively restored in the 14th century, encircle the historic center, offering scenic walks and glimpses into the city's past as defensive fortifications.";
});
questionBoxes4.addEventListener("mouseleave", () => questionBoxes4.innerText = currentText4);

const questionBoxes5 = document.getElementById("textContent_5");
const currentText5 = questionBoxes5.textContent;
questionBoxes5.addEventListener("mouseover", () => {
    questionBoxes5.innerText = "The Canterbury Buttermarket, with its 19th-century charm, was once a bustling hub for dairy trade and now hosts a vibrant array of artisanal goods, preserving its cultural legacy in Canterbury's heart.";
});
questionBoxes5.addEventListener("mouseleave", () => questionBoxes5.innerText = currentText5);

const questionBoxes6 = document.getElementById("textContent_6");
const currentText6 = questionBoxes6.textContent;
questionBoxes6.addEventListener("mouseover", () => {
    questionBoxes6.innerText = "Canterbury's Westgate, dating back to the 14th century, is England's largest surviving city gate, with a storied past as a prison and tollgate. It stands today as a prominent symbol of the city's medieval heritage.";
});
questionBoxes6.addEventListener("mouseleave", () => questionBoxes6.innerText = currentText6);

const questionBoxes7 = document.getElementById("textContent_7");
const currentText7 = questionBoxes7.textContent;
questionBoxes7.addEventListener("mouseover", () => {
    questionBoxes7.innerText = "Canterbury Castle, built in the 11th century, reflects the city's medieval heritage and Norman history, drawing visitors to explore its ruins and learn about its significance.";
});
questionBoxes7.addEventListener("mouseleave", () => questionBoxes7.innerText = currentText7);

const questionBoxes8 = document.getElementById("textContent_8");
const currentText8 = questionBoxes8.textContent;
questionBoxes8.addEventListener("mouseover", () => {
    questionBoxes8.innerText = "Canterbury Cathedral, founded in 597 AD, is a revered symbol of Christian faith and English history, notable for its Gothic architecture and association with Thomas Becket's martyrdom. It's also a UNESCO World Heritage Site, recognized for its cultural significance.";
});
questionBoxes8.addEventListener("mouseleave", () => questionBoxes8.innerText = currentText8);

const questionBoxes9 = document.getElementById("textContent_9");
const currentText9 = questionBoxes9.textContent;
questionBoxes9.addEventListener("mouseover", () => {
    questionBoxes9.innerText = "The Marlowe Theatre, founded in 1984, is a captivating cultural gem in Canterbury, offering a wide range of performances in a modern venue.";
});
questionBoxes9.addEventListener("mouseleave", () => questionBoxes9.innerText = currentText3);
//#endregion
