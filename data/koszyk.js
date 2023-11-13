export const koszyk = [];

export function dodajDoKoszyka(idProduktu, nazwaProduktu) {
  let dopasowanyPrzedmiot;

  koszyk.forEach((przedmiot) => {
    if (idProduktu === przedmiot.idProduktu) {
      dopasowanyPrzedmiot = przedmiot;
    }
  });

  if (dopasowanyPrzedmiot) {
    dopasowanyPrzedmiot.ilość += 1;
  } else {
    koszyk.push({
      idProduktu: idProduktu,
      ilość: 1,
      nazwaProduktu: nazwaProduktu,
    });
  }
}
