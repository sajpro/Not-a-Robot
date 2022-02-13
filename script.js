const checkbox = document.getElementById('robot');
const message = document.getElementById('message');
const submitButton = document.querySelector('input[type=submit]');

// disabled checkbox and button by default
checkbox.disabled = true;
// submitButton.disabled = true;
// hide the mesage by default
message.classList.add('hidden');

submitButton.addEventListener('click', (e) => {
    if ( checkbox.checked != true ){ 
        e.preventDefault();
        alert('Please verify that you are a human!');
    }
});

const elements = document.querySelectorAll('.element');
const selectColor = document.querySelector('#selectColor');
const refresh = document.querySelector('#refresh');

// assign color to the elements
assignColor();
function assignColor() {
    elements.forEach((element) => {
        let color = getRandomColor();
        element.style.backgroundColor = color;
        element.innerHTML = color;
        selectColor.innerHTML = color;
    });
}


// set default color randomly to match by user clicks 
getSelectColorRandomly();
function getSelectColorRandomly() {
    let randomKey = Math.floor(Math.random() * 9); 
    selectColor.innerHTML = elements[randomKey].innerHTML;
} 

// generate random color
function getRandomColor() {
	let text = '0123456789ABCDEF';
	let color = '#';
	for (let index = 0; index < 6; index++) {
		color += text[Math.floor(Math.random() * 16)];
	}
	return color;
}

// check if right color with button click
elements.forEach((element) => {
	element.addEventListener('click', () => {
		if (element.innerHTML === selectColor.innerHTML) {
            alert('You are a human!');
            checkbox.checked = true; 
            submitButton.disabled = false;
            submitButton.classList.remove('gray');
            submitButton.classList.add('green');
            message.classList.remove('hidden');
            message.classList.add('green-color'); 
		}else{
            alert('Please verify that you are a human!');
            return false;
            // location.reload(true);
        }
	});
});

refresh.addEventListener('click', ()=>{
    assignColor();
});