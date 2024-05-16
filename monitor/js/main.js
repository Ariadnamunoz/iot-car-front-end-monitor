let respuesta= document.getElementById("Respuesta");

function callApiRequest(){
axios

.get("http://localhost/iot-car-control/back-end/apis/getRegistro.php") 
.then(function (response) {
  // manejar respuesta exitosa
  console.log(response);

let respuestaSevidor = "";
switch (response.data){
  case "a":
    respuestaSevidor = "Adelante"; break;
  case "b":
    respuestaSevidor = "Atrás"; break;
  case "c":
    respuestaSevidor = "Izquierda"; break;
  case "d":
    respuestaSevidor = "Derecha"; break;
  default:
    respuestaSevidor = "Detener"; break;  
}

respuesta.innerHTML="Ultima orden: <strong> " + respuestaSevidor + "</strong>";
})
.catch(function (error) {
  // manejar error
  console.log(error);
})
.finally(function () {
  // siempre sera executado
});
}


setInterval(callApiRequest, 2000);