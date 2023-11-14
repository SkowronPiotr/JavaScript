export function dzieleniePieniedzy(cenaGrosze) {
  return (Math.round(cenaGrosze) / 100).toFixed(2);
}

export default dzieleniePieniedzy;
