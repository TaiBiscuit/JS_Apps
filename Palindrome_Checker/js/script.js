const textBox = document.getElementById('palin-text')
const form = document.getElementById('form')
const regEx = /[^a-zA-Z0-9]/g;

  
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const str = textBox.value.toLowerCase();
    const fixedStr = str.replace(regEx, '');

    checkPalindrome(fixedStr)
})


const checkPalindrome = (str) => {
    let reversedStr = str.split('').reverse().join('')
    let strLength = str.length;
    
    if(reversedStr === str){
        return Swal.fire({
            title: 'It is!',
            text: 'Its a palindrome',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
    } else if(reversedStr[0] != reversedStr[strLength]){
        return Swal.fire({
            title: 'It is not',
            text: 'Sadly its not a palindrome',
            icon: 'error',
            confirmButtonText: 'Not Cool'
          })
    } return Swal.fire({
        title: 'It is not',
        text: 'Sadly its not a palindrome',
        icon: 'error',
        confirmButtonText: 'Not Cool'
      })
}

