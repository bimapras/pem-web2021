document.getElementById('button-sign').addEventListener('click', function(){
    document.querySelector('.bg-register-sign').style.display = 'flex';
});
document.querySelector('.close').addEventListener('click',function(){
    document.querySelector('.bg-register-sign').style.display = 'none';
});
document.getElementById('button-login').addEventListener('click', function(){
    document.querySelector('.bg-register-login').style.display = 'flex';
});
document.querySelector('.close2').addEventListener('click',function(){
    document.querySelector('.bg-register-login').style.display = 'none';
});