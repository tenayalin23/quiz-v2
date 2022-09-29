let score = 0 

function generateQuestion() {

let a = Math.round(Math.random() * 10)
let b = Math.round(Math.random() * 10) 
document.querySelector('.question').innerHTML = `What is ${a} * ${b} ?`

let correctAnswerIndex = Math.floor(Math.random() * 4)

for (let i =0; i<4; i++) {
    let answerDiv = document.createElement('div')
    answerDiv.classList.add('answers')
        if (i === correctAnswerIndex) {
            answerDiv.innerHTML = a * b
            
        } else {
            let c = Math.round(Math.random() * 10)
            let d = Math.round(Math.random() * 10)
            answerDiv.innerHTML = c * d 
        }
    
    document.querySelector('.answers').appendChild(answerDiv)

    answerDiv.addEventListener('click', () => {
        if (i === correctAnswerIndex) {
            document.body.style.background = "green" 
            score ++ 
            document.querySelector('.score').innerHTML = score 
        } else {
            document.body.style.background = 'red'  
        }
        setTimeout(() => {
            document.body.style.background = "linear-gradient(to bottom, rgb(206, 176, 224) 0%,rgb(89, 116, 132)100%)" 
    }, 500)
    document.querySelector('.question').innerHTML = ''
    document.querySelector('.answers').innerHTML = ''
    generateQuestion()
    })
}
}

generateQuestion()

