function total(){
  var val1 = document.getElementById('costPerLiter').value;
  var val2 = document.getElementById('numberOfLiters').value;
  var total = val1 * val2;
  document.getElementById('total').value = total;
}