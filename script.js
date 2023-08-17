const btnShareOptions = document.querySelector("#btn-share-options").addEventListener("click", showOptions);
const btnHideOptions = document.querySelector("#btn-sair").addEventListener("click", hideOptionsOnthePhone);
const options = document.querySelector(".container-shared");

function showOptions () {
    if (options.style.display === "none" || options.style.display === "") {
        options.style.display = "flex";
    } else {
        options.style.display = "none";
    }
}

function hideOptionsOnthePhone () {
    options.style.display = "none"
}