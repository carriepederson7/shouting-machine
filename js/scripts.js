$(document).ready(function() {
  $("#formOne").submit(function(event){
    event.preventDefault();
  var favoriteColor = $("input#favorite-color").val().toUpperCase();
  var favoriteFood = $("input#favorite-food").val().toUpperCase();
  console.log(favoriteColor);

  $(".favorite-color").text(favoriteColor);
  $(".favorite-food").text(favoriteFood);


$("#shouting").show();


});
});


// $(document).ready(function() {
//   $("#formOne").submit(whateverWeWant(event));
// });
//
// function whateverWeWant(event){
//   event.preventDefault();
// var favoriteColor = $("input#favorite-color").val();
// var favoriteFood = $("input#favorite-food").val();
// console.log(favoriteColor);
//
// $(".favorite-color").text(favoriteColor);
//
//
// $("#shouting").show();
// }
