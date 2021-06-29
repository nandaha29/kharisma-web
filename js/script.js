// const bundle = new bundle();
// const src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous";

/* ------------------ Scroll ---------------------- */
$(window).scroll(function () {
  var wScroll = $(this).scrollTop();
  // $(".jumbotron ").css({
  //   transform: "translate(0px, " + wScroll / 7 + "%",
  // });
  $(".jumbotron h1").css({
    transform: "translate(0px, " + wScroll / 5 + "%",
  });
  $(".jumbotron p").css({
    transform: "translate(0px, " + wScroll / 1.2 + "%",
  });
});
