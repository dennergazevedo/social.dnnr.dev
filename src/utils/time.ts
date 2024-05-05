export function getTime(startsId: Date, endsId: Date){
  var diferencaAnos = endsId.getFullYear() - startsId.getFullYear();
  var diferencaMeses = endsId.getMonth() - startsId.getMonth();

  if (diferencaMeses < 0) {
      diferencaAnos--;
      diferencaMeses += 12;
  }
  return `${diferencaAnos}a ${diferencaMeses}m`
}