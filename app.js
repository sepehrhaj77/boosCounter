localStorage.setItem('score', 1000)
let button = document.getElementById('btn')
button.innerText = localStorage.getItem('score')

function decrement() {
	let val = localStorage.getItem('score') - 1
	localStorage.setItem('score', val)
	button.innerText = localStorage.getItem('score')
}
