document.addEventListener("DOMContentLoaded", () => {
    const name = document.getElementById("name");
    const content = document.getElementById("content");
    const button = document.getElementById("add");
    const data= document.getElementById("data");
    button.addEventListener("click", () => {
        if (!name.value || !content.value) return; // Prevent adding empty items

        // Create a container for the item
        const item = document.createElement("div");
        item.classList.add("item-container");
        item.style.display = "flex";
        item.style.justifyContent = "space-between";
        item.style.alignItems = "center";
        item.style.padding = "10px 15px";
        item.style.borderColor = "#e0e0e0";
        item.style.borderStyle = "solid";
        item.style.backgroundColor = "#f9f9f9";

        const textContent = document.createElement("span");
        textContent.textContent = `${name.value} : ${content.value}`;
        textContent.style.fontSize = "16px";
        textContent.style.fontFamily = "Arial, sans-serif";

        const deleteButton = document.createElement("span");
        deleteButton.innerHTML = "&#128465;"; // Trash can icon
        deleteButton.style.cursor = "pointer";
        deleteButton.title = "Delete item";

        deleteButton.addEventListener("click", () => {
            data.removeChild(item);
        });

        item.appendChild(textContent);
        item.appendChild(deleteButton);
        data.appendChild(item);

        name.value = "";
        content.value = "";
    });
});
