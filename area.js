const baseAndHeight = document.querySelectorAll(".base-and-height");
const checkButton = document.querySelector("#btn-check");
const outputMsg = document.querySelector(".output-msg");

checkButton.addEventListener("click", function area() {
    const base = Number(baseAndHeight[0].value);
    const height = Number(baseAndHeight[1].value);
    const areaOfTriangle = calculateArea(base, height);

    outputMsg.innerText = "The Area of the given triangle is " + areaOfTriangle + "sq.cm"

})

function calculateArea(base, height) {
    return 0.5 * base * height;
}
// var sideOneInput = document.querySelector('#side1')
// var sideTwoInput = document.querySelector('#side2')
// var sideThreeInput = document.querySelector('#side3')
// var calculateArea = document.querySelector('#calculateArea')
// var result = document.querySelector('#result')
// var resultText = document.querySelector('#resultText')

// function areaOfTriangle(event) {
//     event.preventDefault()

//     if (!sideOneInput.value || !sideTwoInput.value || !sideThreeInput.value) {
//         resultText.textContent = "Fields can't be left empty!"
//     }

//     var sideOne = parseFloat(sideOneInput.value)
//     var sideTwo = parseFloat(sideTwoInput.value)
//     var sideThree = parseFloat(sideThreeInput.value)

//     if ((sideOne === 0) || (sideTwo === 0) || (sideThree === 0)) {
//         resultText.textContent = "Side of a triangle can't be zero!"
//         return
//     }

//     if (sideOne + sideTwo > sideThree && sideTwo + sideThree > sideOne && sideOne + sideThree > sideTwo) {
//         var s = (sideOne + sideTwo + sideThree) / 2
//         var area = (Math.sqrt(s * (s - sideOne) * (s - sideTwo) * (s - sideThree))).toFixed(2)


//         resultText.textContent = 'Area of the triangle given sides ' +
//             sideOne +
//             ' units, ' +
//             sideTwo +
//             ' units, ' +
//             sideThree +
//             ' units = ' +
//             area +
//             ' sq.units'
//     } else {
//         resultText.textContent = 'Oops! Not a valid triangle'
//     }
// }

// calculateArea.addEventListener('click', areaOfTriangle)