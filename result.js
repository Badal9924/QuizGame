const progress_value = document.querySelector(".progress_value");
const results = document.querySelector(".results");
const retry_btn = document.querySelector(".retry_btn");
const comment = document.querySelector(".comment");
let finalresult = new URLSearchParams(location.search).get('score');

results.innerText = `${finalresult} out of 20`;
parseFloat(finalresult);
if (finalresult<=5) {
    comment.innerText = "You need to work very hard, first clear your basic";
}
if(finalresult>5 && finalresult<=10){
    comment.innerText = "Your require practice";
}
if (finalresult==20) {
    comment.innerHTML = `
    Great!!!
    <br>
    <img src="images/win1.gif" height="140px" width="140px">
`
}
if (finalresult>10 && finalresult<=15) {
    comment.innerText = "Try next time you can do better";
}
if (finalresult>15 && finalresult<=19) {
    comment.innerText = "Good !!! You will surely do it next time"
}
function claculatescorepercentage(){
    let widthof = (finalresult/20)*100;
    progress_value.style.width = `${widthof}%`;
}
claculatescorepercentage();

retry_btn.addEventListener('click',()=>{
    history.back();
})

