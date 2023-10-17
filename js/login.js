let username = document.querySelector("#username")
let password = document.querySelector("#password")
let loginBtn = document.querySelector("#sign_in")

loginBtn.addEventListener("click" , function(e){
    e.preventDefault()
    if(username == "" || password == ""){
        alert("please fill data")
    }else if(localStorage.hasOwnProperty("username") || localStorage.hasOwnProperty("password")){
        setTimeout (() => {
            window.location = "index.html"
        }, 1500)
    }else{
        alert("username or password is wrong, please enter correct data")
    }
})