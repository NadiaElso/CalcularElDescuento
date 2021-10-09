let btnEnv = document.getElementById("btnEnviar");
let PrecioInicial = document.getElementById("PrecioInicial");
let Descuento = document.getElementById("Descuento");
let PrecioFinal = document.getElementById("PrecioFinal");

btnEnv.addEventListener("click", () => {
  // TU CODIGO VA AQUI, POR EJEMPLO:
  let numeroA: number = Number(PrecioInicial.value);
  let numeroB: number = Number(Descuento.value);
  let numeroC: number = Number(PrecioFinal.value);
  let resultado: number = (numeroA * numeroB) / 100;
  let resultadoTotal: number = PrecioInicial - resultado;
  console.log("el descuento es de:");
  console.log(resultado);
  //}
});
