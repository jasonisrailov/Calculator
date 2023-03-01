class Calculator 
{
    constructor(previousOperandTextElement, currentOperandTextElement)
    {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
    }
    
    // functions to add

    // clearing
    // adding
    // delete
}


const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalButton = document.querySelecton('[data-equals]');
const deleteButton = document.querySelecton('[data-delete]');
const allClearButton = document.querySelecton('[data-all-clear]');
const previousOperandTextElement = document.querySelecton('[data-previous-operand]');
const currentOperandTextElement = document.querySelecton('[data-current-operand]');

