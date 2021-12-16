// function change() {
//     if(document.querySelector('h1').innerHTML === 'Hello') {
//         document.querySelector('h1').innerHTML = 'Yuru git lan';
//     }
//     else {
//         document.querySelector('h1').innerHTML = 'Hello';
//     }

// }
const resultOfNum = document.getElementById('result');
const min = document.getElementById('lower');
const max = document.getElementById('upper');
const genButton = document.getElementById('generate');
const resetButton = document.getElementById('reset');
const textVisible = document.querySelector('text');

function generateRandomNum() {

if(max.value === "" || min.value === "") {
    alert("Invalid value!");
}  

else if(max.value < min.value) {
    alert("Min value is higher than Max value!");
}
else {
    const random = Math.floor(Math.random() * (max.value - min.value + 1) + min.value);
    
resultOfNum.innerHTML = random;
//textVisible.style.visibility = "visible";

}

}

function clearcontent() {
    document.getElementById('result').innerHTML = "";
}

genButton.addEventListener('click', generateRandomNum);
resetButton.addEventListener('click', clearcontent);

