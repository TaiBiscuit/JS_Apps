const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color')
const prevColor = document.querySelector('.prevcolor')

btn.addEventListener('click', function(){
    let hexColor='#';

    for(let i = 0; i < 6; i++){ //i + 1 until i is 6 (becouse of the hex amount of values)
        hexColor += hex[getRandomNumber()];
    }

    
    color.textContent = hexColor;
    prevColor.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})

function onChangeTest(textbox) {
    alert("Value is " + textbox.value + "\n" + "Old Value is " + textbox.oldvalue);
}

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}