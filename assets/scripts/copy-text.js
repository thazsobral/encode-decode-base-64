document.addEventListener("click", function (pointer) {
    let id = pointer.target.id;
    if(id == "encode-area" || id == "decode-area") {
        let text = document.querySelector(`#${id}`).value;

        if(text.trim() != "") {
            navigator.clipboard.writeText(text);

            let copyAlert = createAlert("Copied Text", "p");

            let parentElement = document.querySelector(`#${pointer.path[1].id}`);

            parentElement.appendChild(copyAlert);
            setTimeout( async function() {
                await copyAlert.setAttribute("hidden", "true");
            }, 1000);

            if(id == "encode-area") {
                document.querySelector("#decode-area").value = "";                
            } else {
                document.querySelector("#encode-area").value = "";
            }

        }
    }
})

function createAlert(alertText, elementType) {
    let element = document.createElement(elementType);
    element.innerText = alertText;
    element.setAttribute("id", "alert-hidden");
    return element;
}