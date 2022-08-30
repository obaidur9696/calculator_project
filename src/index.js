var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");
var op1 = 0;
var op2 = null;
var opr = null;
var count = 0;
var oprold;
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        var value = this.getAttribute('data-value');
        if (value == '+' || value == '-' || value == '*' || value == '/') {
            opr = value;
            var temp = parseFloat(display.textContent)
            count++;
            if (count == 1) {
                op1 = temp
            }
            else {
                op1 = eval(op1 + " " + oprold + " " + temp)
            }
            oprold = opr
            display.innerText = ""
        }
        else if (value == '=') {
            op2 = parseFloat(display.textContent);
            var result = eval(op1 + opr + op2)
            display.innerText = result
            count = 0
        }
        else if (value == 'AC') {
            display.innerText = ""
            op1 = 0
            op2 = 0
            count = 0;

        }

        else if (value == '+/-') {
            var temp = parseFloat(display.textContent)
            if (temp > 0) {
                temp = - temp
                display.innerText = temp
            }
            else {
                temp = - temp
                display.innerText = temp
            }
        }

        else if (value == '%') {
            var temp = parseFloat(display.textContent)
            temp = temp / 100;
            display.innerText = temp

        }

        else {
            display.innerText += value
        }
    })




}

