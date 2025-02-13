document.addEventListener("DOMContentLoaded", () => {
    const text = document.getElementById("title");
    const colorPicker = document.getElementById("colorPicker");
    const fontSize = document.getElementById("fontSize");
    const fontFamily = document.getElementById("fontFamily");

    // Function to update text styles
    function updateTextStyle() {
        text.style.color = colorPicker.value;
        text.style.fontSize = fontSize.value + "px";
        text.style.fontFamily = fontFamily.value;
    }

    // Event listeners to detect changes
    colorPicker.addEventListener("input", updateTextStyle);
    fontSize.addEventListener("input", updateTextStyle);
    fontFamily.addEventListener("change", updateTextStyle);
});
