let input = document.querySelector('input');
let buttons = document.querySelectorAll('.button');

let string = "";


Array.from(buttons).forEach((btn)=>{
    btn.addEventListener('click', (e)=>{

        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        else if (e.target.innerHTML == 'Ac') {
            string = " ";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL') {
            string = string.slice(0,-1);
            input.value = string;
        }
        else {
            string = string + e.target.innerHTML;
            input.value = string;
        }
    })
})

