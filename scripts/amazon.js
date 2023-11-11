const produkty = [
  {
    obrazek: "images/products/athletic-cotton-socks-6-pairs.jpg",
    nazwa: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    ocena: {
      gwiazdki: 4.5,
      licznik: 87,
    },
    cenaGrosze: 3999,
  },
  {
    obrazek: "images/products/intermediate-composite-basketball.jpg",
    nazwa: "Intermediate Size Basketball",
    ocena: {
      gwiazdki: 4,
      licznik: 127,
    },
    cenaGrosze: 11000,
  },
  {
    obrazek: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    nazwa: "Adults Plain Cotton T-Shirt - 2 Pack",
    ocena: {
      gwiazdki: 4.5,
      licznik: 56,
    },
    cenaGrosze: 3999,
  },
];

let produktyHTML = "";

produkty.forEach((produkt) => {
  produktyHTML += `
        <div class="product-container">
            <div class="product-image-container">
                <img
                class="product-image"
                src="${produkt.obrazek}"
                />
            </div>

            <div class="product-name limit-text-to-2-lines">
                ${produkt.nazwa}
            </div>

            <div class="product-rating-container">
                <img
                class="product-rating-stars"
                src="images/ratings/rating-${produkt.ocena.gwiazdki * 10}.png"
                />
                <div class="product-rating-count link-primary">${
                  produkt.ocena.licznik
                }</div>
            </div>

            <div class="product-price">${(produkt.cenaGrosze / 100).toFixed(
              2
            )}zł</div>

            <div class="product-quantity-container">
                <select>
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                </select>
            </div>

            <div class="product-spacer"></div>

            <div class="added-to-cart">
                <img src="images/icons/checkmark.png" />
                Added
            </div>

            <button class="add-to-cart-button button-primary">Add to Cart</button>
            </div>
    `;
});

console.log(produktyHTML);

document.querySelector(".js-products-grid").innerHTML = produktyHTML;
