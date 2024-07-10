let count = 0;

function increment() {
	count++;
	document.querySelector('.counter').innerHTML = count;
}

function decrement() {
	count--;
	document.querySelector('.counter').innerHTML = count;
}
