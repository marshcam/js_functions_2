let answer = 0

//add

function add(a, b) {
    let result = a + b
    return result
}

answer = add(2, 4)
console.log(answer)

//multiply

function multiply(a, b) {
    let result = 0;

    let counter = 0;
    while (counter < b) {
        result = add(result, a);

        counter = counter + 1;
    }

    return result;
}

answer = multiply(6,4);
console.log(answer);


//Power/Exponentiation

function power(x,n){
    let result = 1;

    let counter = 0;
    while (counter < n) {
        result = multiply(result, x);

        counter = counter + 1;
    }

    return result;
}

answer = power(2, 8);
console.log(answer);

answer = power(3, 4);
console.log(answer);

//Factorial

function factorial(x) {
    result = 1

    let counter = 0;
    
    while (counter < x) {
        result = multiply(result, x - counter);

        counter = counter + 1;
    }

    return result;
}

answer = factorial(4);
console.log(answer);


