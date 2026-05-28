document.addEventListener('DOMContentLoaded', () => {

    function clickAnswer() {
        let inputs = document.querySelectorAll("fieldset input[name='réponse']");
        inputs.forEach((element) => {
            console.log(element.checked);
            if (element.checked == true) {
                console.log(element);
            }
        });
    }

	document.getElementById("button_reponse").addEventListener("click", clickAnswer);
})
