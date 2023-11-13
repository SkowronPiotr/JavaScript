export let koszyk = [
  {
    idProduktu: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    ilość: 2,
  },
  {
    idProduktu: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    ilość: 1,
  },
];

export function dodajDoKoszyka(idProduktu) {
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
    });
  }
}

export function usunZKoszyka(idProduktu) {
  const nowyKoszyk = [];

  koszyk.forEach((przedmiot) => {
    if (przedmiot.idProduktu !== idProduktu) {
      nowyKoszyk.push(przedmiot);
    }
  });

  koszyk = nowyKoszyk;
}
