import { koszyk } from "../data/koszyk.js";
import { produkty } from "../data/products.js";

let koszykPodsumowanieHTML = "";

koszyk.forEach((przedmiot) => {
  const idProduktu = przedmiot.idProduktu;

  let pasujacyProdukt;

  produkty.forEach((produkt) => {
    if (produkt.id === idProduktu) {
      pasujacyProdukt = produkt;
    }
  });

  koszykPodsumowanieHTML += `<div class="cart-item-container">
            <div class="delivery-date">Delivery date: Tuesday, June 21</div>

            <div class="cart-item-details-grid">
              <img
                class="product-image"
                src="${pasujacyProdukt.obrazek}"
              />

              <div class="cart-item-details">
                <div class="product-name">
                  ${pasujacyProdukt.nazwa}
                </div>
                <div class="product-price">${
                  pasujacyProdukt.cenaGrosze / 100
                }zł</div>
                <div class="product-quantity">
                  <span> Quantity: <span class="quantity-label">${
                    przedmiot.ilość
                  }</span> </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                <div class="delivery-option">
                  <input
                    type="radio"
                    checked
                    class="delivery-option-input"
                    name="delivery-option-1"
                  />
                  <div>
                    <div class="delivery-option-date">Tuesday, June 21</div>
                    <div class="delivery-option-price">FREE Shipping</div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input
                    type="radio"
                    class="delivery-option-input"
                    name="delivery-option-1"
                  />
                  <div>
                    <div class="delivery-option-date">Wednesday, June 15</div>
                    <div class="delivery-option-price">$4.99 - Shipping</div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input
                    type="radio"
                    class="delivery-option-input"
                    name="delivery-option-1"
                  />
                  <div>
                    <div class="delivery-option-date">Monday, June 13</div>
                    <div class="delivery-option-price">$9.99 - Shipping</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    `;
});

document.querySelector(".js-order-summary").innerHTML = koszykPodsumowanieHTML;
