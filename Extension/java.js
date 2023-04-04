let myLeads = []

let inputEl = document.getElementById("input-el")
const savior = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById('delete-btn')
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
let tabBtn = document.getElementById("save-btn")
const tabs = [
	{ url: "https://www.linkedin.com/in/per-harald-borgen/"}
]


if (leadsFromLocalStorage) {
	myLeads = leadsFromLocalStorage
	render(myLeads)
}

tabBtn.addEventListener("click" , function() {
	chrome.tabs.query({active: true,currentWindow : true}, function(tabs){
		myLeads.push(tabs[0].url)
		localStorage.setItem("myLeads",JSON.stringify(myLeads))
		render(myLeads)
	})
	// console.log(tabs[0].url)

})


function render(leads) {
let listItems = ""
	for (let i = 0; i < leads.length; i++) {
		 // listItems += "<li><a href='" +leads[i]+"' target='_blank'>"+ leads[i] +"</a></li>"
		// const li = document.createElement("li")
		// li.textContent = leads[i]
		// ulEl.append(li)
		listItems +=
		 `<li>
			<a href='${leads[i]}' target='_blank'>${leads[i]}
			</a>
		  </li>`
	}
ulEl.innerHTML = listItems  
}


deleteBtn.addEventListener("dblclick" , function() {
	localStorage.clear()
	myLeads = []
	/**He cleared DOM somehow using render() function
	by simply putting render() instead of clearing the innerHTML **/
	ulEl.innerHTML = ''
})

savior.addEventListener("click" , function() {
	myLeads.push(inputEl.value)
	inputEl.value='' 
	localStorage.setItem("myLeads" , JSON.stringify(myLeads))
	render(myLeads)
	
})


//Use Parameters!!