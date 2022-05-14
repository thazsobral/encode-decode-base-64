function convertText(elementId) {
    let element = document.querySelector(`#${elementId}`);
    let text = element.value;
    let convertedText;

    if(elementId == "encode-area") {
        convertedText = encodeText(text);
        let decodeArea = document.querySelector("#decode-area");
        decodeArea.value = convertedText;
    } else if (elementId == "decode-area") {
        convertedText = decodeText(text);
        let encodeArea = document.querySelector("#encode-area");
        encodeArea.value = convertedText;
    } else {
        console.log("Error element id");
    }

    element.value = "";
}

function encodeText(text) {
    return btoa(text);
}

function decodeText(text) {
    return atob(text);
}