import { koszyk, dodajDoKoszyka } from "../data/koszyk.js";
import { produkty } from "../data/products.js";
import { dzieleniePieniedzy } from "./narzędzia/waluta.js";

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
                src="obrazy/ratings/rating-${produkt.ocena.gwiazdki * 10}.png"
                />
                <div class="product-rating-count link-primary">${
                  produkt.ocena.licznik
                }</div>
            </div>

            <div class="product-price">${dzieleniePieniedzy(
              produkt.cenaGrosze
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

            <button class="add-to-cart-button button-primary js-add-to-cart" data-nazwa-produktu="${
              produkt.nazwa
            }" data-id-produktu="${produkt.id}">Add to Cart</button>
            </div>
    `;
});

document.querySelector(".js-products-grid").innerHTML = produktyHTML;

function aktualizacjaKoszyka() {
  let przedmiotywKoszyku = 0;

  koszyk.forEach((przedmiot) => {
    przedmiotywKoszyku += przedmiot.ilość;
  });

  document.querySelector(".js-przedmioty-wkoszyku").innerHTML =
    przedmiotywKoszyku;
}

document.querySelectorAll(".js-add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    const idProduktu = button.dataset.idProduktu;
    const nazwaProduktu = button.dataset.nazwaProduktu;
    dodajDoKoszyka(idProduktu);
    aktualizacjaKoszyka();
  });
});
