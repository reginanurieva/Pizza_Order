var price = 0;

function Pizza(size,toppings,price) {
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}

var sizePrice = {"Medium":10,"Large":12,"Family":14}
var toppingsPrice = {"Pepperoni":1,"Steak":1,"Bell Peppers":1,"Canadian Bacon":1,"Pineapple":1,"Spinach":1,"Mushrooms":1,"Onion":1}

Pizza.prototype.getPrice = function() {
  var totalForToppings = 0;
  this.toppings.forEach(function(element) {
    totalForToppings += toppingsPrice[element];
  });

  this.price = (sizePrice[this.size] + totalForToppings);
  return this.price;
}

//user logic

$(document).ready(function() {
  // var newOrder = new Order();
    $("form#order").submit(function(event) {
    event.preventDefault();

    var size = $("input[type=radio][name=size]:checked").val();
    var toppings = [];
    $("input[type=checkbox][name=toppings]:checked").each(function() {
      toppings.push($(this).val());
    });

    var newPizza = new Pizza(size,toppings,price);
    newPizza.getPrice();

    $("#response").append("<li>" + "Pizza: " + newPizza.size + "; Toppings: " + newPizza.toppings +"."+ " Your total price is: " + newPizza.price + " dollars"+"</li>");

  });
  $("#submitOrder").click(function(){
    alert("Your Order is on the way! Thank You for choosing Regina's Pizza! Please come back again!");
  });
});
//comments!!!!!!!!
