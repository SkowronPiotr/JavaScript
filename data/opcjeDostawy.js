export const opcjeDostawy = [
  {
    id: "1",
    liczbaDni: 7,
    cenaGrosze: 0,
  },
  {
    id: "2",
    liczbaDni: 3,
    cenaGrosze: 2000,
  },
  {
    id: "3",
    liczbaDni: 1,
    cenaGrosze: 5000,
  },
];

export function renderujopcjeDostawy(idOpcjiDostawy) {
  let opcjaDostawy;

  opcjeDostawy.forEach((opcja) => {
    if (opcja.id === idOpcjiDostawy) {
      opcjaDostawy = opcja;
    }
  });

  return opcjaDostawy;
}
