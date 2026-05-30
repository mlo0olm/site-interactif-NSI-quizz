const list_questions = [
    ["Quelle est la bonne réponse ?", ["A", "B", "C"], "B"],
    ["Quelle est la meilleure spécialité ?", ["SES", "HGGSP", "HLP", "NSI", "AMC", "SVT"], "NSI"],
    ["Quel est le meilleur logiciel de 3D ?", ["Maya", "Blender", "3DS Max", "SketchUp", "Fusion 360", "Cinema 4D", "Houdini"], "Blender"],
    ["Quel est le meilleur langage de programmation ?", ["C#", "PHP", "Scratch Jr", "Java", "JavaScript", "C++", "Python", "Assembleur"], "Python"],
    ["Quel langage est le plus utile pour l’avenir de l’IA ?", ["Python", "C++", "Java", "R", "IA pas bien"], "IA pas bien"],
    ["Quel éditeur de code est le plus puissant ?", ["VS Code", "Sublime Text", "Vim", "PyCharm", "Notepad++", "Bloc-notes"], "Bloc-notes"],
    ["Quel est le meilleur concepteur de microprocesseurs ?", ["Intel", "AMD", "Motorola", "Apple"], "Motorola"],
    ["Quel est le pire endroit pour coder ?", ["Sur un PC gamer", "Sur ENIAC", "Sur un Chromebook", "Sur un grille-pain"], "Sur un Chromebook"],
    ["Quelle est la meilleure méthode de debug ?", ["Mettre des print() partout", "Changer le code au hasard", "Demander à une IA", "Redémarrer l’ordinateur"], "Mettre des print() partout"],
    ["Que fait un développeur âgé ?", ["Code propre", "Boit du café", "Crée des QCM de NSI", "Regarde des vidéos YouTube"], "Crée des QCM de NSI"],
    ["Quelle est la meilleure police pour coder ?", ["Comic Sans MS", "Courier New", "Arial", "Papyrus"], "Comic Sans MS"],
    ["Quel est le meilleur navigateur pour coder ?", ["Chrome", "Firefox", "Edge", "Internet Explorer"], "Internet Explorer"],
    ["Que faire quand on s’ennuie ?", ["Installer 52 fois une VM de Windows XP", "Apprendre son cours d’histoire", "Jouer à Tetris", "Écrire des questions stupides pour ce quiz"], "Écrire des questions stupides pour ce quiz"]
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
	document.getElementById("button_skip").addEventListener("click", skipQuestion); // pourquoi on le passe pas directement en appelant newQuestion ? 
})
