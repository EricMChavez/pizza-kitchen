let chef1 = document.getElementById('chef-1');
let chef2 = document.getElementById('chef-2');
let chef3 = document.getElementById('chef-3');
let freezer = document.getElementById('freezer');
let oven = document.getElementById('oven');
let customer1 = document.getElementById('customer1');
let customer2 = document.getElementById('customer2');
let customer3 = document.getElementById('customer3');
let button = document.getElementById('btn');
let customer = 0;
let open = true;

//
let bell = new Audio('sound-kitchen-bell.wav');
let computer = new Audio('sound-computer-keyboard.wav');
let fridgeOpen = new Audio('sound-fridge-2-open.wav');
let fridgeClose = new Audio('sound-fridge-2-close.wav');
let order = new Audio('sound-order-up.wav');
let ovenOpen = new Audio('sound-oven-1-open.wav');
let ovenClose = new Audio('sound-oven-1-close.wav');
function inputOrder() {
	chef1.classList = 'inputOrder';
	setTimeout(() => {
		computer.play();
	}, 2000);
	setTimeout(() => {
		chef1.classList = 'returnOrder';
		computer.pause();
		openFreezer();
	}, 3000);
}
function openFreezer() {
	chef2.classList = 'openFreezer';
	order.play();
	setTimeout(() => {
		placePizza();
	}, 2100);
}
function placePizza() {
	fridgeOpen.play();
	freezer.style.backgroundImage = `url('freezer-open.png')`;
	chef2.classList = 'placePizza';
	open = true;
	button.classList.toggle('open');
	setTimeout(() => {
		returnToPost();
	}, 2100);
}
function returnToPost() {
	cooking();
	chef2.classList = 'return';
	fridgeClose.play();
	freezer.style.backgroundImage = `url('freezer-closed.png')`;
}
function retrievePizza() {
	chef3.classList = 'retrievePizza';
	bell.play();
	setTimeout(() => {
		deliverPizza();
	}, 2100);
}

function deliverPizza() {
	chef3.classList = 'deliverPizza';
	ovenOpen.play();
	oven.style.backgroundImage = `url('oven-open.png')`;
}
function cooking() {
	ovenClose.play();
	oven.style.backgroundImage = `url('oven-closed.png')`;
	setTimeout(() => {
		retrievePizza();
	}, 3000);
}
function start() {
	if (open == true) {
		if (customer == 0) {
			customer = 1;
			customer1.classList.toggle('customer');
		} else if (customer == 1) {
			customer = 2;
			customer2.classList.toggle('customer');
		} else if (customer == 2) {
			customer = 0;
			customer3.classList.toggle('customer');
		}
		open = false;
		button.classList.toggle('open');
		setTimeout(() => {
			inputOrder();
		}, 2000);
	}
}
