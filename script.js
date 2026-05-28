const list_questions = [
    ["Quel est la bonne réponse ?", ["A", "B", "C"], "B"] // Questions, [liste de réponses possibles], bonne réponse
];
let index_question = -1;

document.addEventListener('DOMContentLoaded', () => {
    function new_question() {
        index_question ++;
        document.getElementById("question").innerText = list_questions[index_question][0];
        const div_possible = document.getElementById("possibilites");
        div_possible.innerHTML = ""; // TODO : manière plus propre de vider la div ???

		index = 0;
		list_questions[index_question][1].forEach(
			(element) => {
				var div = document.createElement("div");

				var input = document.createElement("input");
				input.type = "radio";
				input.name = "réponse";
				input.id = "reponse"+index;
				input.value = element;
				/*
				input.id = "ownerName" + buttons;
				input.className = "form-control";
				*/

				var label = document.createElement("label");
				label.htmlFor = "reponse"+index;
				label.innerText = element;

				div.appendChild(input);
				div.appendChild(label);
				div_possible.appendChild(div);

				index ++;
			}
		)
    }

    function clickAnswer() {
        let inputs = document.querySelectorAll("fieldset input[name='réponse']");
        inputs.forEach((element) => {
            if (element.checked == true) {
                if (element.value == list_questions[index_question][2]){
					console.log("Réponse correct");
					document.getElementById("correct").hidden = false;
				} else {
					console.log("Réponse incorrect");
					document.getElementById("incorrect").hidden = false;
				}
            }
        });
    }

	/*document.getElementById("correct").hidden = true;
	document.getElementById("incorrect").hidden = true;*/

    new_question()
	document.getElementById("button_reponse").addEventListener("click", clickAnswer);
})
