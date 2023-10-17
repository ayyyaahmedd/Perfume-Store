let username = document.querySelector("#username")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let registerBtn = document.querySelector("#sign_up")

registerBtn.addEventListener("click", function(e){
    e.preventDefault()
    if(username.value == "" || email.value =="" || password.value == ""){
        alert("please fill data")
    }else{
        localStorage.setItem("username", username.value)
        localStorage.setItem("email", email.value)
        localStorage.setItem("password", password.value)

        setTimeout(() =>{
            window.location = "login.html"
        }, 1500)
    }
})

// links

let btnF = document.getElementById("openFace")
let btnGl = document.getElementById("openGoogle")
let btnT = document.getElementById("openTwitter")
let btnGt = document.getElementById("openGit")

var x , y , z , g;
function openFacebook(){
    x =  window.open("https://www.facebook.com","title","width=400 , height=400")
}
function openGoogle(){
    y= window.open("https://www.google.com","title","width=400 , height=400")
}
function openTwitter(){
    y= window.open("https://www.twitter.com","title","width=400 , height=400")
}
function openGit(){
    y= window.open("https://www.github.com","title","width=400 , height=400")
}
btnF.onclick = openFacebook;
btnGl.onclick = openGoogle;
btnT.onclick = openTwitter;
btnGt.onclick = openGit;
