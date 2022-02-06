/*
* Excercise 1
*
*/
const color_block = document.querySelector('#color-block');
const color_name = document.querySelector('#color-name');
let flag = 1;
let color_old = '#F08080';
let color_new = '#1E90FF';
/*
* Then write a function that changes the text and the color inside the div
*
*/

function changeColor(){
    //Write a condition determine what color it should be changed to
    if(flag){
        //change the background color using JS
        flag = 0;
        color_block.style.backgroundColor = color_new;
        //Change the text of the color using the span id color-name
        color_name.textContent = color_new;
    }
    else{
        //change the background color using JS
        flag = 1;
        color_block.style.backgroundColor = color_old;
        //Change the text of the color using the span id color-name
        color_name.textContent = color_old;
    }
}

color_block.addEventListener('click', changeColor);

/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/
const button = document.querySelector('#convertbtn');
const inputF = document.querySelector('#f-input');
const outputC = document.querySelector('#c-output');
/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(){
    //Calculate the temperature here
    const degreeF = inputF.value;
    let degreeC = NaN;
    if(degreeF != '') {
        degreeC = (degreeF-32)*(5/9);
    }
    //Send the calculated temperature to HTML
    outputC.textContent = degreeC;
}

button.addEventListener('click', convertTemp);
