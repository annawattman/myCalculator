$(document).bind('keypress', function (event) {
    // console.log(event.key)
    //  event.preventDefault();
    if (event.key === 'Enter' || event.key === '=' || event.key === '+' || event.key === '-' || event.key === 'c' || event.key === 'C' 
    || event.key === '1' || event.key === '2' || event.key === '3' || event.key === '4' || event.key === '5' || 
    event.key === '6' || event.key === '7' || event.key === '8' || event.key === '9' || event.key === '0' || event.key === '.') {

       event.preventDefault()
        switch (event.key) {
            case 'Enter':
                calculate();
                break;

            case '=':
                calculate();
                break;

            case '+':
                addCalc('+');
                break;

            case '-':
                addCalc('-');
                break;

            case 'c' || 'C':
                reset();
                break;

            case '1': 
            $('#display').val($('#display').val()+'1') 
            break;

            case '2': 
            $('#display').val($('#display').val()+'2') 
            break;

            case '3': 
            $('#display').val($('#display').val()+'3') 
            break;

            case '4': 
            $('#display').val($('#display').val()+'4') 
            break;

            case '5': 
            $('#display').val($('#display').val()+'5') 
            break;

            case '6': 
            $('#display').val($('#display').val()+'6') 
            break;

            case '7': 
            $('#display').val($('#display').val()+'7') 
            break;

            case '8': 
            $('#display').val($('#display').val()+'8') 
            break;

            case '9': 
            $('#display').val($('#display').val()+'9') 
            break;

            case '0': 
            $('#display').val($('#display').val()+'0') 
            break;

            case '.': 
            $('#display').val($('#display').val()+'.') 
            break;
        }
    }
    else {
        return (
            event.key === '1' ||
            event.key === '2' ||
            event.key === '3' ||
            event.key === '4' ||
            event.key === '5' ||
            event.key === '6' ||
            event.key === '7' ||
            event.key === '8' ||
            event.key === '9' ||
            event.key === '0' ||
            event.key === 'Delete' ||
            event.key === 'Backspace' ||
            event.key === 'ArrowLeft' ||
            event.key === 'ArrowRight' ||
            event.key === '.'
        )
    }
})



$('#equal').bind('click', function (event) {
    calculate();
})

$('#del').bind('click', function (event) {
    reset();
})

$('#add').bind('click', function (event) {
    addCalc('+');
})

$('#sub').bind('click', function (event) {
    addCalc('-');
})

function reset() {
    $('#display').val('');
    $('#calculation').html('');
}


function addCalc(value) {
    if (value === '+') {
        let calculation = $('#calculation')


        let input = $('#display')

        console.log(input.val())

       if (!$.trim(calculation.html()).length) {
            calculation.append(input.val())
        } else {
           calculation.append('+' + input.val()) 
        }
        input.val('')
    }

        if (value === '-') {
            let calculation = $('#calculation')

            let input = $('#display')

            console.log(input.val())

            if (!$.trim(calculation.html()).length) {
                calculation.append(input.val())
            } else {
                calculation.append('-' + input.val())

            }

            input.val('')
        }
    }
        function calculate() {
            let calculation = $('#calculation');

            let splitArray = calculation.html().split(/(\+)|(\-)/g).filter(Boolean)
            console.log(splitArray);

            while (splitArray.length >= 3) {
                let newValue = operator(splitArray[1], parseFloat(splitArray[0]), parseFloat(splitArray[2]))
                splitArray.splice(0, 3)
                splitArray.splice(0, 0, newValue.toString())
                if (splitArray.length === 1) {
                    $('#resultDisplay').text(splitArray[0])
                    calculation.html('');
                    $('#display').val('');
                }
            }
        }

        function operator(check, a, b) {
            let result;

            switch (check) {
                case '+':
                    result = a + b;
                    break;

                case '-':
                    result = a - b;
                    break;

            }
            return result;

        }