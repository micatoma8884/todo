window.addEventListener('load', () => {
	let input = document.getElementById("prviinput");
    let input1 = document.getElementById('dugme');
let div = document.getElementById('drugi');

let prviInput = input.value;
input1.addEventListener('click',()=>{
    let noviInput=document.createElement('noviInput');
		noviInput.type = 'text';
		noviInput.value = 'text';

        div.appendChild(noviInput);
} )

		

	




})