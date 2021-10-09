let btnEnv = document.getElementById("btnEnviar");
let dato = document.getElementById("dato");
let dato2 = document.getElementById("dato2");

btnEnv.addEventListener("click", () => {
  // TU CODIGO VA AQUI, POR EJEMPLO:
  let numeroA: number = Number(dato.value);
  let numeroB: number = Number(dato2.value);
  let resultado: number = numeroA * numeroB;
  console.log("el area del rectangulo es:");
  console.log(resultado);
  //}
});
