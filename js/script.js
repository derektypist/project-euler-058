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