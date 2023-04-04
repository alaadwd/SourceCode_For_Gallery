

	let cards = []
	let sum = 0
	let hasBlackJack = false
	let isAlive = false
	let message = ""
	let messegeEl = document.getElementById('messege-el')
	//let sumEl = document.getElementById("sum-el")
	//Another way (broader way to choose elements instead of the old way is :)
	let sumEl = document.getElementById("sum-el")
	let cardEl = document.getElementById("card-el")
	


playerEl.textContent = player.name + " : " + player.chips + "$"
function getRandomCard() {
	let randomCard = Math.floor(Math.random() *13) + 1
	if (randomCard > 10) {
		return 10
	} else if (randomCard === 1) {
		return 11
	} else{
		return randomCard
	}
}

function startGame() {
	isAlive = true
	let secondCard = getRandomCard()
	let firstCard = getRandomCard()
	cards = [firstCard,secondCard]
	sum = firstCard + secondCard
	hasBlackJack = false

	renderGame()
}

function renderGame() {
	cardEl.textContent = "Cards: "
	for (i = 0 ; i < cards.length ; i++){
		cardEl.textContent += cards[i] + " "
	}
	sumEl.textContent = "Sum : "+sum
	if (sum <= 20) {
	message ="Do you want to draw another card?"
	
} 	else if (sum === 21) {
	message = "BLACKJACK!"
	hasBlackJack = true
	
} 	else { 
	isAlive = false
	message = "Congratz on losing all your money"	
}
	messegeEl.textContent = message
}



function newCard() {
	if (hasBlackJack === false && isAlive === true) {
	let drawnCard = getRandomCard()
	sum += drawnCard
	cards.push(drawnCard)
	renderGame()}
}
