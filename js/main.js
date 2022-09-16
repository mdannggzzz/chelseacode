function signup(e){
event.preventDefault();
var username=document.getElementById("username").value;
var email=document.getElementById("email").value;

var password=document.getElementById("password").value;
var user={
    username:username,
    email:email,
    password:password,
}

var json=JSON.stringify(user);
localStorage.setItem(username,json);
alert("bạn đã đăng kí thành công")
window.location.href="login.html";
}



function login(e){
    event.preventDefault();
    var username=document.getElementById("username").value;
var email=document.getElementById("email").value;

var password=document.getElementById("password").value;
var user=localStorage.getItem(username);
var data=JSON.parse(user);
if(user ==null){
    alert("vui lòng nhập đầy đủ username và password");
}
else if(username==data.username && email==data.email && password==data.password){
    alert("đăng nhập thành công");
    window.location.href="index.html";
}
else{
    alert("đăng nhập thất bại sai tài khoản hoặc mật khẩu");
}
}