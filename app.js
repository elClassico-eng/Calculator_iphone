"use strict";

//prettier-ignore
let num1 = "", num2 = "", sign = "", finish;

const resultScreen = document.querySelector(".calc-body__result");
const btn = document.querySelector(".buttons");

//prettier-ignore
const number = ['0','1','2','3','4','5','6','7','8','9', "."]
const digit = ["-", "+", "X", "/"];

//ac
function clearAll() {
    num1 = "";
    num2 = "";
    sign = "";
    finish = false;
    resultScreen.textContent = "";
}

//prettier-ignore
btn.addEventListener("click", (event) => {
	if (!(event.target.classList[0] === 'btn')) return
	if (event.target.innerText === 'ac') document.querySelector('.ac').addEventListener('click', clearAll)

	resultScreen.textContent = ''
	let key = event.target.textContent

	if (number.includes(key)) {
		if (num2 === '' && sign === '') {
			num1 += key
			resultScreen.innerText = num1
		} else if(num2!== '' && sign!== '' && finish) {

			num2 = key
			finish = false
			resultScreen.innerText = num2


		} else {
			num2+= key
			resultScreen.innerText = num2
		}

		console.log(num1,sign, num2)
		return

	} else if (digit.includes(key)) {
		sign += key
		resultScreen.innerText = sign
	} else if(key === '=') {
		switch(sign) {
			case '+':
				num1 = (+num1) + (+num2)
				break; 
			case '-': 
				num1 = num1 - num2
				break;
			case 'X':
				num1 = num1 * num2
				break
			case '/':
				if(num2 === '0') {
					resultScreen.innerText = 'Ошибка'
					a = ''
					b = ''
					sign = ''
				}	

		}
		finish === true
		resultScreen.textContent = num1
		console.log(num1,sign, num2)
	}
	
})
