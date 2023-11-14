import { koszyk } from "../../data/koszyk.js";
import { dopasujProdukt } from "../../data/products.js";
import { opcjeDostawy, renderujopcjeDostawy } from "../../data/opcjeDostawy.js";
import dzieleniePieniedzy from "../narzędzia/waluta.js";

export function renderujPodsumowaniePlatnosci() {
  let cenaProduktuGrosze = 0;
  let cenaTransportuGrosze = 0;

  koszyk.forEach((przedmiot) => {
    const produkt = dopasujProdukt(przedmiot.idProduktu);
    cenaProduktuGrosze += produkt.cenaGrosze * przedmiot.ilość;

    const opcjaDostawy = renderujopcjeDostawy(przedmiot.opcjaDostawyId);
    cenaTransportuGrosze += opcjaDostawy.cenaGrosze;
  });

  const podsumowanieBezPodatkuGrosze =
    cenaProduktuGrosze + cenaTransportuGrosze;
  const podatekGrosze = podsumowanieBezPodatkuGrosze * 0.1;
  const podsumowanieZPodatkiem = podsumowanieBezPodatkuGrosze + podatekGrosze;

  const podsumowaniePlatnosciHTML = `
  <div class="payment-summary-title">Order Summary</div>

  <div class="payment-summary-row">
    <div>Items (3):</div>
    <div class="payment-summary-money">${dzieleniePieniedzy(
      cenaProduktuGrosze
    )} zł</div>
  </div>

  <div class="payment-summary-row">
    <div>Shipping &amp; handling:</div>
    <div class="payment-summary-money">${dzieleniePieniedzy(
      cenaTransportuGrosze
    )} zł</div>
  </div>

  <div class="payment-summary-row subtotal-row">
    <div>Total before tax:</div>
    <div class="payment-summary-money">${dzieleniePieniedzy(
      podsumowanieBezPodatkuGrosze
    )} zł</div>
  </div>

  <div class="payment-summary-row">
    <div>Estimated tax (10%):</div>
    <div class="payment-summary-money">${dzieleniePieniedzy(
      podatekGrosze
    )} zł</div>
  </div>

  <div class="payment-summary-row total-row">
    <div>Order total:</div>
    <div class="payment-summary-money">${dzieleniePieniedzy(
      podsumowanieZPodatkiem
    )} zł</div>
  </div>

  <button class="place-order-button button-primary">
    Place your order
  </button>
  `;

  document.querySelector(".js-payment-summary").innerHTML =
    podsumowaniePlatnosciHTML;
}
