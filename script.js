const list_questions = [
    ["Quel est la bonne réponse ?", ["A", "B", "C"], "B"], // Questions, [liste de réponses possibles], bonne réponse
    ["Quel est la meillleure spé ?", ["SES", "HGGSP", "HLP", "NSI", "AMC", "SVT"], "NSI"]
];
let index_question = -1;
let score = 0;

document.addEventListener('DOMContentLoaded', () => {
	function end() {
		document.getElementById("question").hidden = true;
		document.getElementById("button_skip").hidden = true;
		document.getElementById("button_reponse").hidden = true;
		document.getElementById("button_next").hidden = true;
		document.getElementById("correct").hidden = true;
		document.getElementById("incorrect").hidden = true;

		document.getElementById("end").hidden = false;

		document.getElementById("texte_fieldset").hidden = true;
		document.getElementById("score").innerText = "Score : " + (score/list_questions.length)*100 + "%";
	}


    function newQuestion() {
		document.getElementById("button_reponse").hidden = false;
		document.getElementById("button_skip").hidden = false;
		document.getElementById("button_next").hidden = true;
		document.getElementById("correct").hidden = true;
		document.getElementById("incorrect").hidden = true;

		const div_possible = document.getElementById("possibilites");
		div_possible.innerHTML = ""; // TODO : manière plus propre de vider la div ???

        index_question ++;

		if (index_question >= list_questions.length) {
			end();
		} else {
			document.getElementById("question").innerText = list_questions[index_question][0];

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
					label.id="label"+index;
					label.innerText = element;

					div.appendChild(input);
					div.appendChild(label);
					div_possible.appendChild(div);

					index ++;
				}
			)
		}
    }

	function disableAll() {
		for (let i = 0; i < list_questions[index_question][1].length; i++) {
			document.getElementById("reponse"+i).disabled = true;
			if (list_questions[index_question][1][i] == list_questions[index_question][2]) {
				document.getElementById("reponse"+i).classList.add("correct");
			} else if (document.getElementById("reponse"+i).checked == true) {
				document.getElementById("reponse"+i).classList.add("incorrect");
			} else {
				document.getElementById("label"+i).classList.add("label_disabled");
			}
		}
	}

    function clickAnswer() {
		document.getElementById("choose_element").hidden = true;

        let inputs = document.querySelectorAll("fieldset input[name='réponse']");
		let element_checked = false; // Permet de vérifier qu'un élément a été coché
        inputs.forEach((element) => {
            if (element.checked == true) {
				element_checked = true;
                if (element.value == list_questions[index_question][2]){
					console.log("Réponse correct");
					score ++;
					document.getElementById("correct").hidden = false;
				} else {
					console.log("Réponse incorrect");
					document.getElementById("incorrect").hidden = false;
				}
            }
        });
		if (element_checked) {
			document.getElementById("button_reponse").hidden = true;
			document.getElementById("button_skip").hidden = true;
			document.getElementById("button_next").hidden = false;
			disableAll();
		} else {
			document.getElementById("choose_element").hidden = false;
		}
    }

	function skipQuestion() {
		document.getElementById("button_reponse").hidden = true;
		document.getElementById("button_skip").hidden = true;
		document.getElementById("button_next").hidden = false;
		disableAll();
	}

	/*document.getElementById("correct").hidden = true;
	document.getElementById("incorrect").hidden = true;*/

    newQuestion();
	document.getElementById("button_reponse").addEventListener("click", clickAnswer);
	document.getElementById("button_next").addEventListener("click", newQuestion);
	document.getElementById("button_skip").addEventListener("click", skipQuestion);
})
