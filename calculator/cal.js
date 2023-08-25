const input = document.getElementById('taskInput');
const buttons = document.getElementsByTagName('button')


let string = "";
let arr = Array.from(buttons);
arr.forEach('click', (e) => {
    if (e.target.innerHTML == '=') {
        string = eval(string);
        input.value = string;
    }
});