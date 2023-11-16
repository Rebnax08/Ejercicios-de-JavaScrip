function suma(array) {
    var suma = array.reduce(function(a, b){
        return a + b;
    }, 0);
    console.log(suma);
}

var miArray = [1, 2, 3];
suma(miArray);