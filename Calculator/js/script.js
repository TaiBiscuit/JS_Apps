const numberButtons = document.querySelectorAll('[data-numb]')
const operationButtons = document.querySelectorAll('[data-op]')
const equalButton = document.querySelector('[data-equ]')
const deleteButton = document.querySelector('[data-del]')
const clearButton = document.querySelector('[data-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

class Calcu{                                                                                               //class that will be used later
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
      }

    clear(){
        this.currentOperand =''
        this.previousOperand=''
        this.operation = undefined
    }

    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNumber(number){
        if (number === '.' && this.currentOperand.includes('.')) return                                 //prevents the . to be entered multiple times
        this.currentOperand = this.currentOperand.toString() + number.toString()                        //converts the number to string to avoid replacing the current one
    }

    anOperation(operation){
        if (this.currentOperand ==='') return
        if (this.previousOperand !== ''){                                                               //makes it possible to compute by pressing the operation twice
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand                                                      //recicles the current number
        this.currentOperand = ''
    }

    compute(){
        let computation
        const prev = parseFloat(this.previousOperand)                                                   //parses a string argument and returns a floating point number.
        const current = parseFloat(this.currentOperand)
        if(isNaN(prev) || isNaN(current)) return                                                        // || is a logical or
        switch (this.operation){                                                                        // multiple if's together
            case '+':
                computation = prev + current 
                break
            case '-':
                computation = prev - current
                break   
            case '*':
                computation = prev * current
                break
            case '÷':
                computation = prev / current
                break
            default:                                                                                    //if the cases do not happen, return
                return
        }
        this.currentOperand = computation
        this.operation = undefined                                                                      //resets operation
        this.previousOperand = ''
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString()                                                          
        const integerDigits = parseFloat(stringNumber.split('.')[0])                                    //splits the number and places it before the . 
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
          integerDisplay = ''
        } else {
          integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })             //when integerDigits becames a string it cannot have decimal places
        }
        if (decimalDigits != null) {                                                                    //checks if there is a .
          return `${integerDisplay}.${decimalDigits}`
        } else {
          return integerDisplay
        }
      }
    
    updateDisplay(){
        this.currentOperandTextElement.innerText = 
        this.getDisplayNumber(this.currentOperand)                                 
        if(this.operation != null){
            this.previousOperandTextElement.innerText =
            `${this.getDisplayNumber (this.previousOperand)} ${this.operation}`                         //$ is an identifier, orders the row
        }
        else {
            this.previousOperandTextElement.innerText = ''
          } 
    }    
}


const calculator = new Calcu(previousOperandTextElement, currentOperandTextElement)                     //var that uses the previous class

numberButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        calculator.appendNumber(button.innerText)                                                       //goto appendNumber
        calculator.updateDisplay()                                                                      //goto updateDisplay
    })
})

operationButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        calculator.anOperation(button.innerText)                                                        //goto anOperation
        calculator.updateDisplay()                                                                     
    })
})

equalButton.addEventListener('click', button =>{
    calculator.compute()
    calculator.updateDisplay()
})

clearButton.addEventListener('click', button =>{
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', button =>{
    calculator.delete()
    calculator.updateDisplay()
})