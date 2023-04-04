/**

let MyAge = 111

console.log(MyAge)

document.getElementById("hakona").innerText = MyAge

**/

let lapsCompleted = 0
let countEl = document.getElementById("hakona")
let saveEl = document.getElementById("save")

function bullEyes() {
	lapsCompleted +=  1
	countEl.innerText = lapsCompleted
}

function miss() {

lapsCompleted = 0
countEl.innerText = lapsCompleted

}

function save() {
	let container = lapsCompleted + " " + " - "
	saveEl.textContent += container
}
