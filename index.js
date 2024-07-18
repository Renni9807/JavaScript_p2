// Calculator

// enable user input -> how? -> let users to click the number, not type it
// what should be used? -> span elements should change dynamically, according to user input

// click number -> written in the enter part 
// forEach numBtn, addEventListener -> clicked -> insertAdjacentText('beforeend', index);
// restriction - number up to 10 digit

const num = document.querySelector('#num');
const numBtn = document.querySelectorAll('.numbers');
const funcBtn = document.querySelectorAll('.arithmetic');
const delBtn = document.querySelector('#del');
const resetBtn = document.querySelector('#reset');
const enterBtn = document.querySelector('#enter');

numBtn.forEach((button, index) => {
    button.addEventListener('click', () => {
        let addTextNum = '';
        if(index === 9) {
            addTextNum = 0;
        } else {
            addTextNum = index + 1;
        }
        num.insertAdjacentText('beforeend', addTextNum);
    })
})

funcBtn.forEach((button, index) => {
    button.addEventListener('click', () => {
        let addTextFunc = '';
        switch(index) {
            case 0: {
                addTextFunc = '+'
                break;
            } 
            case 1: {
                addTextFunc = '-'
                break;
            } 
            case 2: {
                addTextFunc = '/'
                break;
            } 
            case 3: {
                addTextFunc = '*'
                break;
            } 
            default: {
                console.log('arithmetic not specified');
            }
        }
        num.insertAdjacentText('beforeend', addTextFunc);
    })
})

resetBtn.addEventListener('click', () => {
    num.innerText = 'Enter : ';
    resultP.innerText = '';
})

delBtn.addEventListener('click', () => {
    let currentText = num.innerText;
    if(currentText.length < 8) {
        num.insertAdjacentHTML('beforeend', "<span>Not available!</span>")
        delBtn.setAttribute('disabled', '');
        setTimeout(() => {
            delBtn.removeAttribute('disabled', '');
            num.innerText = 'Enter : ';
        }, 500);
    } else {
        num.innerText = currentText.slice(0, -1);
    }
})

const resultP = document.createElement('p');

enterBtn.addEventListener('click', () => {
    let formula = num.innerText.slice(8,); 
    try {
        resultP.innerText = eval(formula);
        enterBtn.insertAdjacentElement('afterend', resultP);
    } catch(e) {
        console.log(e);
        resultP.innerText = 'Invalid';
        enterBtn.insertAdjacentElement('afterend', resultP);
    }
})


