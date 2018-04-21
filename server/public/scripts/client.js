console.log('Javascript is loaded');

$(document).ready(onReady);

function onReady() {
    console.log('JQuery is loaded');
    $('#addButton').on('click', addNumbers);
    $('#subtractButton').on('click', subtractNumbers);
    $('#multiplyButton').on('click', multiplyNumbers);
    $('#divideButton').on('click', divideNumbers);
    // $('#clearButton').on('click', clearCalculations);
}


function addNumbers() {
    let newObject = {
        x: $('#firstNumber').val(),
        y: $('#secondNumber').val(),
        type: 'add'
    };
    $.ajax({
        method: "POST",
        url: "/add-numbers",
        data: newObject
    }).then(function(response) {
        console.log(response);
        $('#answerSpan').text(`${response.result}`);
        getCalculations(); 
    });
}

function subtractNumbers() {
    let newObject = {
        x: $('#firstNumber').val(),
        y: $('#secondNumber').val(),
        type: 'subtract'        
    };
    $.ajax({
        method: "POST",
        url: '/subtract-numbers',
        data: newObject
    })
    .then(function(response) {
        console.log(response);
        $('#answerSpan').text(`${response.result}`);
        getCalculations();        
    });
}

function multiplyNumbers() {
    console.log('m button click');
    let newObject = {
        x: $('#firstNumber').val(),
        y: $('#secondNumber').val(),
        type: 'multiply'        
    };
    $.ajax({
        method: "POST",
        url: '/multiply-numbers',
        data: newObject
    })
    .then(function(response) {
        console.log(response);
        $('#answerSpan').text(`${response.result}`);
        getCalculations();        
    });
}

function divideNumbers() {
    console.log('d button click');
    let newObject = {
        x: $('#firstNumber').val(),
        y: $('#secondNumber').val(),
        type: 'divide'        
    };
    $.ajax({
        method: "POST",
        url: '/divide-numbers',
        data: newObject
    })
    .then(function(response) {
        console.log(response);
        $('#answerSpan').text(`${response.result}`);
        getCalculations();        
    });
}

function responseFunction() {
    $('#answerSpan').text(`${response.result}`);
    getCalculations(); 
}

function getCalculations() {
    $.ajax({
        method: "GET",
        url:"/get-calculations"
    })
    .then(function (response) {
        $('#previousCalculationsList').empty();
        for(let calculation of response) {
            console.log(calculation);
            $('#previousCalculationsList').prepend(`<li>${calculation.x} 
            ${calculation.assignment} ${calculation.y} = ${calculation.result}</li>`);
        }
    });
}
