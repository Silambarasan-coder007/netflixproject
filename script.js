let login=document.getElementById("login")
login.addEventListener("click",()=>{
     let email=document.getElementById("email").value;
    if (email==="") {
        alert("please enter your email id.!")
    } else {
        alert("ok you entered you email id..!")
    }
})

