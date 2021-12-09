const quizForm = document.querySelector(".quiz-form")
const submitAnswerBtn = document.querySelector("#submit-ans-btn")
const outPut = document.querySelector("#output")

const correctAnswers = ["90°", "right angled"]


function calculateScore(event) {
    event.preventDefault()
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm)
    for (let value of formResults.values()) {
        if (value === correctAnswers[index]) {
            score = score + 1
        }

        index = index + 1
    }

    outPut.textContent = "Your score is  " + score
}

submitAnswerBtn.addEventListener("click", +calculateScore);