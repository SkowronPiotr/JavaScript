import {
  koszyk,
  usunZKoszyka,
  aktualiacjaOpcjiDostawy,
} from "../data/koszyk.js";
import { produkty } from "../data/products.js";
import { dzieleniePieniedzy } from "./narzędzia/waluta.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import { hello } from "https://unpkg.com/supersimpledev@1.0.1/hello.esm.js";
import { opcjeDostawy } from "../data/opcjeDostawy.js";

hello();

const dzisiaj = dayjs();
const dataDostawy = dzisiaj.add(7, "days");
console.log(dataDostawy.format("dddd, MMMM D"));

let koszykPodsumowanieHTML = "";

koszyk.forEach((przedmiot) => {
  const idProduktu = przedmiot.idProduktu;

  let pasujacyProdukt;

  produkty.forEach((produkt) => {
    if (produkt.id === idProduktu) {
      pasujacyProdukt = produkt;
    }
  });

  const opcjaDostawyId = przedmiot.opcjaDostawyId;

  let opcjaDostawy;

  opcjeDostawy.forEach((opcja) => {
    if (opcja.id === opcjaDostawyId) {
      opcjaDostawy = opcja;
    }
  });

  const dzisiaj = dayjs();
  const dataDostawy = dzisiaj.add(opcjaDostawy.liczbaDni, "days");
  const dataString = dataDostawy.format("dddd, D MMMM");

  koszykPodsumowanieHTML += `
    <div class="cart-item-container
      js-cart-item-container-${pasujacyProdukt.id}">
      <div class="delivery-date">
        Data dostawy: ${dataString}
      </div>

      <div class="cart-item-details-grid">
        <img class="product-image"
          src="${pasujacyProdukt.obrazek}">

        <div class="cart-item-details">
          <div class="product-name">
            ${pasujacyProdukt.nazwa}
          </div>
          <div class="product-price">
            $${dzieleniePieniedzy(pasujacyProdukt.cenaGrosze)}
          </div>
          <div class="product-quantity">
            <span>
              Quantity: <span class="quantity-label">${przedmiot.ilość}</span>
            </span>
            <span class="update-quantity-link link-primary">
              Update
            </span>
            <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${
              pasujacyProdukt.id
            }">
              Delete
            </span>
          </div>
        </div>

        <div class="delivery-options">
          <div class="delivery-options-title">
            Choose a delivery option:
          </div>
          ${opcjeDostawyHTML(pasujacyProdukt, przedmiot)}
        </div>
      </div>
    </div>
  `;
});

function opcjeDostawyHTML(pasujacyProdukt, przedmiot) {
  let html = "";

  opcjeDostawy.forEach((opcjaDostawy) => {
    const dzisiaj = dayjs();
    const dataDostawy = dzisiaj.add(opcjaDostawy.liczbaDni, "days");
    const dataString = dataDostawy.format("dddd, D MMMM");
    const cenaString =
      opcjaDostawy.cenaGrosze === 0
        ? "Darmowa wysyłka"
        : `${dzieleniePieniedzy(opcjaDostawy.cenaGrosze)}zł -`;

    const czySprawdzone = opcjaDostawy.id === przedmiot.opcjaDostawyId;

    html += `
          <div class="delivery-option js-delivery-option"
          data-produkt-id="${pasujacyProdukt.id}"
          data-opcja-dostawy-id="${opcjaDostawy.id}">
            <input type="radio" ${czySprawdzone ? "checked" : ""}
              class="delivery-option-input"
              name="delivery-option-${pasujacyProdukt.id}">
            <div>
              <div class="delivery-option-date">
                ${dataString} koszt dostawy:
              </div>
              <div class="delivery-option-price">
                ${cenaString} koszt dostawy
              </div>
            </div>
          </div>
    `;
  });

  return html;
}

document.querySelector(".js-order-summary").innerHTML = koszykPodsumowanieHTML;

document.querySelectorAll(".js-delete-link").forEach((link) => {
  link.addEventListener("click", () => {
    const idProduktu = link.dataset.productId;
    usunZKoszyka(idProduktu);

    const pojemnik = document.querySelector(
      `.js-cart-item-container-${idProduktu}`
    );
    pojemnik.remove();
  });
});

document.querySelectorAll(".js-delivery-option").forEach((element) => {
  element.addEventListener("click", () => {
    const { produktId, opcjaDostawyId } = element.dataset;
    aktualiacjaOpcjiDostawy(produktId, opcjaDostawyId);
  });
});
