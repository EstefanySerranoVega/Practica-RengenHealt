/*Mostrar seccion preguntas y respuestas
var container = document.getElementsByClassName('container-question');
container.addEventListener("click", function() {
    container.classList.toggle('active-container_question');
});

document.querySelector(".container-question").addEventListener("click", animateAcordeon);
var question = document.querySelector("#container-question");
alert("La variable question es: " + question);

function animateAcordeon() {
    question.classList.toggle('active-container');
    alert("funciona");
}
*/
//const header = document.querySelectorAll('header');
const containerQuestion = document.querySelectorAll('.container-question');
const question = document.querySelectorAll('.question');
question.forEach((cadaQuestion, i) => {
    question[i].addEventListener('click', () => {
        containerQuestion.forEach((cadaContainerQuestion, i) => {
            containerQuestion[i].classList.remove('activo');

        });
        containerQuestion[i].classList.add('activo');
    });
    alert(`funciona xd ${question}`);
});