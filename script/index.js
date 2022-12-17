const usrname = "ADMIN"
const password = "ADMINPASS"
const loginbtn = document.querySelector('#login')
const usrinp = document.querySelector('#uname')
const usrpsw = document.querySelector('#psw')
loginbtn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(usrinp.value == usrname && usrpsw.value == password){
        window.open('../pages/home.html')
    }
    else{
        alert('invalid credentials')
    }
})