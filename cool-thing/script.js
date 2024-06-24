function getFactors(number, returnArray = false) {
    if (typeof number == 'number') {
        let i = 0;
        let factors = [];

        while (true) {
            if (i !== number) {
                i++;
                let a = eval(number / i).toString();

                if (a.indexOf('.') == -1) {
                    factors.push(i);
                }
            } else {
                if (returnArray) {
                    return factors;
                } else {
                    return factors.join(', ');
                }
            }
        }
    } else {
        throw new Error('the provided value is not an number!');
    }
}
function getMultiples(number, numberOfMutliples, returnArray = false) {
    if (typeof number == 'number' && typeof numberOfMutliples !== 'undefined' && numberOfMutliples < 823584) {
        let i = 0;
        let mutliples = [];

        while (true) {
            if (mutliples.length !== numberOfMutliples) {
                i++;
                let a = eval(number * i).toString();

                mutliples.push(a);
            } else {
                if (returnArray) {
                    return mutliples;
                } else {
                    return mutliples.join(', ');
                }
            }
        }
    } else {
        if (typeof number !== 'number') {
            throw new Error('the provided value is not an number!');
        } else if (typeof numberOfMutliples == 'undefined') {
            throw new Error('the numberOfMultiples should not be undefined!')
        } else if (numberOfMutliples > 823584) {
            throw new Error('the value should not be greater than 823584!')
        }
    }
}
let factorsDisplay = document.getElementById('f');
let factorsInput = document.getElementById('fi');
let multiplesDisplay = document.getElementById('m');
let multiplesInput = document.getElementById('mi');

window.onkeydown = (event) => {
    if (event.key.toLowerCase() == 'z') factorsDisplay.innerText = getFactors(eval(factorsInput.value)); else if (event.key == 'x') multiplesDisplay.innertext = getMultiples(eval(multiplesInput.value));
}
