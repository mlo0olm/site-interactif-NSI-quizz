document.addEventListener('DOMContentLoaded', () => {
    let tbody_classement = document.getElementById("tbody_classement");
    tbody_classement.innerHTML = "";

    let sauvegarde = JSON.parse(window.localStorage.getItem("results"));

    let liste_sauvegarde = [];
    for (v in Object.keys(sauvegarde)) {
        liste_sauvegarde.push([sauvegarde[Object.keys(sauvegarde)[v]], Object.keys(sauvegarde)[v]]);
    }
    liste_sauvegarde.sort(compareFn=(a, b) => a[0] + b[0]);
    console.log(liste_sauvegarde);

	if (sauvegarde == null) {
		console.log("no sauvegarde");
		let paragraphe = document.createElement("p");
		paragraphe.innerText = "Aucun résultat enregistré";
		document.getElementById("classement").appendChild(paragraphe);
		tbody_classement.remove();
	} else {
        for (let i = 1; i <= liste_sauvegarde.length; i++) {
            let participant = liste_sauvegarde[i-1][1]
            let score = liste_sauvegarde[i-1][0]

            let tr = document.createElement("tr");

            let td_num = document.createElement("td");
            td_num.innerText = i+".";
            tr.appendChild(td_num);

            let td_nom = document.createElement("td");
            td_nom.innerText = participant;
            tr.appendChild(td_nom);

            let td_pourcent = document.createElement("td");
            td_pourcent.innerText = score+"%";
            tr.appendChild(td_pourcent);

            let td_progress = document.createElement("td");
            let progress = document.createElement("progress");
            progress.max = "100";
            console.log(participant);
            console.log(score);
            progress.value = score;
            progress.innerText = score+"%";
            td_progress.appendChild(progress);
            tr.appendChild(td_progress);

            tbody_classement.appendChild(tr);

        }
	}
})