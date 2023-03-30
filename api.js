let validateEl = document.querySelector("#validate");
let cardsEl = document.querySelector(".cards")


function editcard() {
    let inputEl = document.querySelector(".name_card");
    fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=" + inputEl.value + "&language=fr")
        .then((response) => {
            return response.json();
        })
        .then((datas) => {
            datas.data.forEach((res) => {
                console.log(res.card_images)
                cardsEl.innerHTML += `<div class="each_card">
                <h2 class="name_card">${res.name}</h2>
                <img class="img_card" src="${res.card_images[0].image_url}">
                
                <p class="card_desc">${res.desc}</p>
                <span class="price1">Cardmarket: ${res.card_prices[0].cardmarket_price}$</span><span class="price2">TCGplayer: ${res.card_prices[0].tcgplayer_price}$</span></div>`;
            })
        })
}
validateEl.addEventListener("click", editcard)