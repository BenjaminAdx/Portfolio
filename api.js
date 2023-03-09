let validateEl = document.querySelector("#validate");
let cardsEl = document.querySelector(".cards")


function editcard() {
    let inputEl = document.querySelector(".name_card");
    fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?name=" + inputEl.value)
        .then((response) => {
            return response.json();
        })
        .then((datas) => {
            datas.data.forEach((res) => {
                cardsEl.innerHTML += `<p>${res.name}`;
            })
        })
}
validateEl.addEventListener("click", editcard)