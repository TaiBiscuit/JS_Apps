const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color')
const prevColor = document.querySelector('.prevcolor')



btn.addEventListener('click', function(){
    let hexColor = '#';
    let pop = '';
    
    for(let i = 0; i < 6; i++){ //i + 1 until i is 6 (becouse of the hex amount of values)
        hexColor += hex[getRandomNumber()];
    }

    color.textContent = hexColor;
    previousArray.unshift(hexColor);
    pop = previousArray.pop();
    document.body.style.backgroundColor = hexColor;
    let node = document.createElement('button');
    node.setAttribute('id', 'oldColors');
    node.appendChild(document.createTextNode(previousArray));
    node.classList.add('oldies');
    document.querySelector('ul').appendChild(node);

})



const previousArray = ['#2B2A33'];

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}