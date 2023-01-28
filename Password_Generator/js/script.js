const buttonS = document.getElementById('submit');
let passLength = document.getElementById('pass-length').value;
const charsDown = 'abcdefghijklmnopqrstuvwxyz';
const charsUp = 'ABCDEFGHIJKMLNOPQRSTUVWXYZ';
const nums = '0123456789';
const sym = '!@#$%^&*()_-+';
let emptyString = '';

const finalValue = passLength;


buttonS.addEventListener('click', getChars());

function getChars(){
    passlength
    while(emptyString.length < finalValue){
         emptyString += charsDown[Math.floor(Math.random() * charsDown.length )];
    }
    document.getElementById('password').innerHTML = emptyString;      
}


