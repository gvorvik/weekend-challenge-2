console.log('Javascript is loaded');

$(document).ready(onReady);

function onReady() {
    console.log('JQuery is loaded');
    $('#addButton').on('click', addNumbers);
    $('#subtractButton').on('click', subtractNumbers);
    $('#multiplyButton').on('click', multiplyNumbers);
    $('#divideButton').on('click', divideNumbers);
}


function addNumbers() {
    console.log('a button click');

}

function subtractNumbers() {
    console.log('s button click');

}

function multiplyNumbers() {
    console.log('m button click');

}

function divideNumbers() {
    console.log('d button click');

}