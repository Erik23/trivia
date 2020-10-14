// const response = {
//     response_code: 0,
//     results: [
//         {},
//         {}
//     ]
// }

// let datos = {}

function getQuestions() {
    const questionsQuantity = document.getElementById('questions-number').value
    fetch(`https://opentdb.com/api.php?amount=${questionsQuantity}`)
        .then(response => response.json())
        .then(data => printCards(data.results))
}

// console.log(datos);

function printCards(questions) {
    const container = document.getElementById('container-cards');
    container.innerHTML = '';
    questions.forEach((question, index) => {
        const card = returnCardHTML(question, index);
        container.innerHTML += card;
    });
    // poner las preguntas en mi página web
}

function returnCardHTML(q, indexCard) {
    const card = `<div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${q.category}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${q.question}</h6>
                            ${returnAnswersHTML(q.correct_answer, q.incorrect_answers, indexCard)}           
                    </div>
                </div>`
    return card;
}


function returnAnswersHTML(correct, incorrects, indexCard) {

    incorrects.push(correct)
    let incorrectHTML = '';
    incorrects.forEach((incorrect, index) => {
        incorrectHTML += `<div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="answer-${indexCard}-${index}" value="option1" checked>
                            <label class="form-check-label" for="answer-${indexCard}-${index}">
                            ${incorrect}
                            </label>
                        </div>`;
    })


    return incorrectHTML;
}
