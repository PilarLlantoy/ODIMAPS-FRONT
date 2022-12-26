// Función que detiene la ejecución por un determinado número de milisegundos.
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Función que comprueba si dos números son aproximados, considerando un epsilon dado:
const checkApprox = (num1, num2, epsilon = 0.05) => {
  return Math.abs(num1 - num2) < epsilon;
}

// Función que calcula la distancia geográfica entre 2 puntos.
const distance = (lat1, lon1, lat2, lon2, unit = "K") => {
  if ((lat1 === lat2) && (lon1 === lon2)) {
    return 0;
  }
  else {
    var radlat1 = Math.PI * lat1/180;
    var radlat2 = Math.PI * lat2/180;
    var theta = lon1-lon2;
    var radtheta = Math.PI * theta/180;
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = dist * 180/Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit==="K") { dist = dist * 1.609344 }
    if (unit==="N") { dist = dist * 0.8684 }
    return dist;
  }
}

// Función que retorna el módulo de un vector cualquiera.
const vectorSize = (x, y) => {
  return Math.sqrt(x * x + y * y);
}
