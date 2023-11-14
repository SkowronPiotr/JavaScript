export let koszyk = JSON.parse(localStorage.getItem("koszyk"));

if (!koszyk) {
  koszyk = [
    {
      idProduktu: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      ilość: 2,
      opcjaDostawyId: "1",
    },
    {
      idProduktu: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      ilość: 1,
      opcjaDostawyId: "2",
    },
  ];
}

function zapiszKoszyk() {
  localStorage.setItem("koszyk", JSON.stringify(koszyk));
}

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
      opcjaDostawyId: "1",
    });
  }
  zapiszKoszyk();
}

export function usunZKoszyka(idProduktu) {
  const nowyKoszyk = [];

  koszyk.forEach((przedmiot) => {
    if (przedmiot.idProduktu !== idProduktu) {
      nowyKoszyk.push(przedmiot);
    }
  });

  koszyk = nowyKoszyk;
  zapiszKoszyk();
}

export function aktualiacjaOpcjiDostawy(idProduktu, opcjaDostawyId) {
  let dopasowanyPrzedmiot;

  koszyk.forEach((przedmiot) => {
    if (idProduktu === przedmiot.idProduktu) {
      dopasowanyPrzedmiot = przedmiot;
    }
  });

  dopasowanyPrzedmiot.opcjaDostawyId = opcjaDostawyId;
  zapiszKoszyk();
}
