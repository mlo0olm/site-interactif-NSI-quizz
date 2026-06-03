document.addEventListener('DOMContentLoaded', () => {
    let tbody_classement = document.getElementById("tbody_classement");
    tbody_classement.innerHTML = "";

    let sauvegarde = JSON.parse(window.localStorage.getItem("results"));
	if (sauvegarde == null) {
		console.log("no sauvegarde");
		let paragraphe = document.createElement("p");
		paragraphe.innerText = "Aucun résultat enregistré";
		document.getElementById("classement").appendChild(paragraphe);
		tbody_classement.remove();
	} else {
	    let i = 1;
        for (participant in sauvegarde) {
            let tr = document.createElement("tr");

            let td_num = document.createElement("td");
            td_num.innerText = i+".";
            tr.appendChild(td_num);

            let td_nom = document.createElement("td");
            td_nom.innerText = participant;
            tr.appendChild(td_nom);

            let td_pourcent = document.createElement("td");
            td_pourcent.innerText = sauvegarde[participant]+"%";
            tr.appendChild(td_pourcent);

            let td_progress = document.createElement("td");
            let progress = document.createElement("progress");
            progress.max = "100";
            console.log(participant);
            console.log(sauvegarde[participant]);
            progress.value = sauvegarde[participant];
            progress.innerText = sauvegarde[participant]+"%";
            td_progress.appendChild(progress);
            tr.appendChild(td_progress);

            tbody_classement.appendChild(tr);

            i ++;
        }
	}
})