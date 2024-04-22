


function dropDown() {
  let menuMobile = document.getElementsByClassName("menu-mobile");
  Array.from(menuMobile).forEach((x) => {
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
  })
}



let cantFinalCapriciosa = 0;
let cantFinalBeef = 0;
let cantFinalFlorenza = 0;
let cantFinalInferno = 0;
let cantFinalQuattroFormaggi = 0;
let cantFinalMargherita = 0;

function agregarCapriciosa() {
  let cantCapriciosa = document.getElementById("cantCapriciosa");
  let totalCapriciosa = document.getElementById("totalCapriciosa");
  cantFinalCapriciosa++;
  cantCapriciosa.innerHTML = cantFinalCapriciosa;
  let precioFinalCapriciosa = cantFinalCapriciosa * 8;
  totalCapriciosa.innerHTML = `€${precioFinalCapriciosa}`;
  precioTotal();
}

function agregarBeef() {
  let cantBeef = document.getElementById("cantBeef");
  let totalBeef = document.getElementById("totalBeef");
  cantFinalBeef++;
  cantBeef.innerHTML = cantFinalBeef;
  let precioFinalBeef = cantFinalBeef * 9;
  totalBeef.innerHTML = `€${precioFinalBeef}`;
  precioTotal();
}

function agregarFlorenza() {
  let cantFlorenza = document.getElementById("cantFlorenza");
  let totalFlorenza = document.getElementById("totalFlorenza");
  cantFinalFlorenza++;
  cantFlorenza.innerHTML = cantFinalFlorenza;
  let precioFinalFlorenza = cantFinalFlorenza * 7;
  totalFlorenza.innerHTML = `€${precioFinalFlorenza}`;
  precioTotal();
}

function agregarInferno() {
  let cantInferno = document.getElementById("cantInferno");
  let totalInferno = document.getElementById("totalInferno");
  cantFinalInferno++;
  cantInferno.innerHTML = cantFinalInferno;
  let precioFinalInferno = cantFinalInferno * 6;
  totalInferno.innerHTML = `€${precioFinalInferno}`;
  precioTotal();
}

function agregarQuattroFormaggi() {
  let cantQuattroFormaggi = document.getElementById("cantQuattroFormaggi");
  let totalQuattroFormaggi = document.getElementById("totalQuattroFormaggi");
  cantFinalQuattroFormaggi++;
  cantQuattroFormaggi.innerHTML = cantFinalQuattroFormaggi;
  let precioFinalQuattroFormaggi = cantFinalQuattroFormaggi * 8;
  totalQuattroFormaggi.innerHTML = `€${precioFinalQuattroFormaggi}`;
  precioTotal();
}

function agregarMargherita() {
  let cantMargherita = document.getElementById("cantMargherita");
  let totalMargherita = document.getElementById("totalMargherita");
  cantFinalMargherita++;
  cantMargherita.innerHTML = cantFinalMargherita;
  let precioFinalMargherita = cantFinalMargherita * 5;
  totalMargherita.innerHTML = `€${precioFinalMargherita}`;
  precioTotal();
}



function precioTotal() {
  let total = 0;
  let precioCapriciosa = cantFinalCapriciosa * 8;
  let precioBeef = cantFinalBeef * 9;
  let precioFlorenza = cantFinalFlorenza * 7;
  let precioInferno = cantFinalInferno * 6;
  let precioQuattroFormaggi = cantFinalQuattroFormaggi * 8;
  let precioMargherita = cantFinalMargherita * 5;

  total = precioCapriciosa + precioBeef + precioFlorenza + precioInferno + precioQuattroFormaggi + precioMargherita;

  let totalPrecio = document.getElementById("TotalCarrito");
  totalPrecio.innerHTML = `€${total}`;

}


function limpiarTabla() {

  let limpiarCantidadCapriciosa = document.getElementById("cantCapriciosa");
  let limpiarCantidadBeef = document.getElementById("cantBeef");
  let limpiarCantidadFlorenza = document.getElementById("cantFlorenza");
  let limpiarCantidadInferno = document.getElementById("cantInferno");
  let limpiarCantidadQuattroFormaggi = document.getElementById("cantQuattroFormaggi");
  let limpiarCantidadMargherita = document.getElementById("cantMargherita");

  let limpiarPrecioCapriciosa = document.getElementById("totalCapriciosa");
  let limpiarPrecioBeef = document.getElementById("totalBeef");
  let limpiarPrecioFlorenza = document.getElementById("totalFlorenza");
  let limpiarPrecioInferno = document.getElementById("totalInferno");
  let limpiarPrecioQuattroFormaggi = document.getElementById("totalQuattroFormaggi");
  let limpiarPrecioMargherita = document.getElementById("totalMargherita");

  let limpiarTotal = document.getElementById("TotalCarrito");

  limpiarCantidadCapriciosa.innerHTML = "0";
  limpiarCantidadBeef.innerHTML = "0";
  limpiarCantidadFlorenza.innerHTML = "0";
  limpiarCantidadInferno.innerHTML = "0";
  limpiarCantidadQuattroFormaggi.innerHTML = "0";
  limpiarCantidadMargherita.innerHTML = "0";

  limpiarPrecioCapriciosa.innerHTML = "-";
  limpiarPrecioBeef.innerHTML = "-";
  limpiarPrecioFlorenza.innerHTML = "-";
  limpiarPrecioInferno.innerHTML = "-";
  limpiarPrecioQuattroFormaggi.innerHTML = "-";
  limpiarPrecioMargherita.innerHTML = "-";

  limpiarTotal.innerHTML = "€0.00"

  cantFinalCapriciosa = "0";
  cantFinalBeef = "0";
  cantFinalFlorenza = "0";
  cantFinalInferno = "0";
  cantFinalQuattroFormaggi = "0";
  cantFinalMargherita = "0";
}


function imprimirPDF() {
  window.jsPDF = window.jspdf.jsPDF;
  let doc = new jsPDF();
  doc.text(10, 10, "Gracias por elegirnos, en breves llegara su pedido.");
  doc.save('Resumen Compra.pdf');
}


function validarFormulario() {
  let nombreCompleto = document.getElementById('name').value;
  let correoElectronico = document.getElementById('email').value;

  let palabrasNombreCompleto = nombreCompleto.trim().split(" ");
  if (palabrasNombreCompleto.length < 2) {
    alert("Por favor, ingrese su nombre completo.");
    return false;
  }

  if (correoElectronico === "") {
    alert("Por favor, ingrese su dirección de correo electrónico.");
    return false;
  } else {
    let correoElectronicoRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    let correoElectronicoDominioRegex = /(gmail|\.com)/i;
    if (!correoElectronico.match(correoElectronicoRegex) || !correoElectronico.match(correoElectronicoDominioRegex)) {
      alert("Por favor, ingrese una dirección de correo electrónico válida (ejemplo: famapizzas@gmail.com).");
      return false;
    }
  }
  return true;
}

async function consultar() {
  let gente = document.getElementById("gente-api");
  let response = await fetch('https://randomuser.me/api/');
  let data = await response.json();
  let resultado = data.results[0].name.first + ' ' + data.results[0].name.last;
  gente.innerHTML = resultado;

  let inversion = document.getElementById("inversion-api");
  let numRandom = Math.random() * 999;
  numRandom = Math.floor(numRandom + 100);
  inversion.innerHTML = `€${numRandom}`;
}
