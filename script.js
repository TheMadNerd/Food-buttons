const btn1 = document.querySelector('.btn-1')
const btn2 = document.querySelector('.btn-2')
const btn3 = document.querySelector('.btn-3')
const p = document.querySelector('p')

function Food(name, price) {
	this.name = name
	this.price = price
}

const meal1 = new Food('Pizza', 33)
const meal2 = new Food('Hamburger', 28)
const meal3 = new Food('Chips', 10)

Food.prototype.showInfo = function () {
	p.textContent = `${this.name} cost ${this.price} zł.`
}

btn1.addEventListener('click', () => meal1.showInfo())
btn2.addEventListener('click', () => meal2.showInfo())
btn3.addEventListener('click', () => meal3.showInfo())
