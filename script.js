const list_questions = [
    ["Quel est la bonne réponse ?", ["A", "B", "C"], "B"] // Questions, [liste de réponses possibles], bonne réponse
];
let index_question = -1;

document.addEventListener('DOMContentLoaded', () => {
    function new_question() {
        index_question ++;
        document.getElementById("question").innerText = list_questions[index_question][0];
        const div_possible = document.getElementById("possibilites")
        var div = document.createElement("div");
        var input = document.createElement("input")
        input.id = "ownerName" + buttons;
        input.className = "form-control";
        document.body.appendChild(input);


    }

    function clickAnswer() {
        let inputs = document.querySelectorAll("fieldset input[name='réponse']");
        inputs.forEach((element) => {
            console.log(element.checked);
            if (element.checked == true) {
                console.log(element);
            }
        });
    }
    new_question()
	document.getElementById("button_reponse").addEventListener("click", clickAnswer);
})
