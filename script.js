// $(document).ready(function () {
//   $("p").click(function () {
//     $(this).hide();
//   });
// });

// $(document).ready(function () {
//   $(".ofd1").on({
//     mouseenter: function () {
//       $(this).css("background-color", "green");
//     },
//     mouseleave: function () {
//       $(this).css("background-color", "lightblue");
//     },
//     click: function () {
//       $(this).css("background-color", "yellow");
//     },
//     dbclick: function () {
//       $(this).css("color", "yellow");
//     },
//   });
// });

// $(document).ready(function () {
//   $("#fotologo").click(function () {
//     $(this).toggle(15000);
//   });
// });

// $(document).ready(function () {
//   $("#fotologo").click(function () {
//     $(this).fadeToggle(5000);
//   });
// });

// $(document).ready(function () {
//   $("#fotologo").click(function () {
//     $(this).fadeTo("slow", 0.5);
//   });
// });

// $(document).ready(function () {
//   $("*").fadeIn(function () {
//     $(this).fadeTo("slow", 0.9);
//   });
// });

$("#fotologo").click(function animateon() {
  $(this).animate({ height: "1px", width: "1px" }, 3000);
  $(this)
    .animate({ height: "100px", width: "100px" }, 5000)
    .animate({ opacity: "0.5" }, 1000)
    .animate({ opacity: "1" }, 3000, animateon);
});
