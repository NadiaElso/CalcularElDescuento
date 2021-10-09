let btnEnv = document.getElementById("btnEnviar");
let PrecioInicial= document.getElementById("PrecioInicial");
let Descuento = document.getElementById("Descuento");

btnEnv.addEventListener("click", () => {
  // TU CODIGO VA AQUI, POR EJEMPLO:
  let numeroA: number = Number(PrecioInicial.value);
  let numeroB: number = Number(Descuento.value);
  let resultado: number = (numeroA * numeroB)/100;
  console.log("el descuento es de:");
  console.log(resultado);
  //}
});
