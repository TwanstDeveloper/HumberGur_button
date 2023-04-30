let btnopen=document.getElementById('open');
let btnclose=document.getElementById('close');
let con=document.querySelector('.container');

btnclose.onclick=function(){
    
con.classList.add('hide');
this.classList.add('hide');
btnopen.classList.remove('hide');
}
btnopen.onclick=function(){
    
con.classList.remove('hide');
this.classList.add('hide');
btnclose.classList.remove('hide');
}