
function handleClick(){
const logButton = document.getElementById("loginButton");
const oput = document.getElementById("output");


logButton.addEventListener('click',()=>{
    // oput.textContent = "You Have successfully Logged in!"
    oput.textContent='Logged in............';
});

}

handleClick();