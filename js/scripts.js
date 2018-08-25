function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  // this.price;
};
// var pizzaSize = {"medium":10, "large":10, "family":10};
// var pizzaTopping = {"olives":1, "mushrooms":1, "onion":1};
//to determine the pizza prices
Pizza.prototype.price = function(){
var price = 10;

  if(this.size === "Family"){
    price +=3;
  } else if (this.size === "Large"){
    price +=2;
  } else {
    price +=1;
  }
// }
//toppings price
if (this.toppings===1){
  price +=1;
} else{
  price += 0;
}
 //return price;
 alert("bjh")
}

$(document).ready(function() {
  $("form#order").submit(function(event){
    $("#pizza-size").text("code");
    //$("#pizza-size").text("Before prevent");
  // event.PreventDefault();
  // $("#pizza-size").text("code in the form");
  // alert("tj");

});
//
  var pizzaSize = $("input:radio[name='size']:checked").val();
  var newPizza = new Pizza(pizzaSize);
  // $("#pizza-size").text("Before prevent");
//
//   $.each($("input[name='toppings']:checked"),function(){
//     newPizza.toppings.push($(this).val());
//   });
// // console.log("#submitBtn")
 // $("button#submitBtn").click(function(){
//   // $(".pizzaOrder").last().click(function(){
//   // $("#pizza-order-detail").show();

//   // $("#pizza-size").text(newPizza.size);
// $("#pizza-ingredients").text(newPizza.toppings);
//   $("#order-total").text(newPizza.price());
//   // console.log();

// });
 // });
// debugger;
 });
