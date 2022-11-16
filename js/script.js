// Function to Get Percent Information (including Invalid Input)
function getPercentInfo() {
    // Set Up Variable
    let txt = "";
    // Get the value of the input field
    let num = document.getElementById("mypercent").value;
    // Check if input is valid
    if (isNaN(num) || num.length==0 || num<10 || num>62 || (num.length > 1 && num[0] == "0") || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 10 and 62.  Do not include leading zeros.`;
    } else {
        txt += `Below ${num} percent, side length of square spiral is ${spiralPrimes(num)}.`;
    }

    // Display Information in the Browser
    document.getElementById("percentinfo").innerHTML = txt;
}

/*
    Function to return the side length of the square spiral for which the
    percent of primes along both diagonals falls below a given percent
    spiralPrimes(50) returns 11
    spiralPrimes(15) returns 981
    spiralPrimes(10) returns 26241
*/
function spiralPrimes(percent) {
    function isPrime(n) {
        if (n<=3) {
            return n>1;
        } else if (n%2===0 || n%3===0) {
            return false;
        }

        for (let i=5;i*i<=n;i+=6) {
            if (n%i===0 || n % (i+2) === 0) return false;
        }

        return true;
    }

    let totalCount = 1;
    let primesCount = 0;
    let curNumber = 1;
    let curSideLength = 1;
    let ratio = 1;
    const wantedRatio = percent/100;

    while (ratio >= wantedRatio) {
        curSideLength += 2;
        for (let i=0;i<4;i++) {
            curNumber += curSideLength - 1;
            totalCount++;
            if (i!==3 && isPrime(curNumber)) primesCount++;
        }
        ratio = primesCount/totalCount;
    }
    return curSideLength;
}
