var hide = document.getElementById("overview-hide");
var expand = document.getElementById("overview-expand");

hide.addEventListener("click", function () {
  console.log("clicked");
  hide.style.display = "none";
  expand.style.display = "block";
  document.querySelectorAll(".hidden-module").forEach(function (c) {
    if (c.style.display === "block") {
      c.style.display = "none";
    } else {
      c.style.display = "block";
    }
  });
});

expand.addEventListener("click", function () {
  console.log("clicked");
  hide.style.display = "block";
  expand.style.display = "none";
  document.querySelectorAll(".hidden-module").forEach(function (c) {
    if (c.style.display === "block") {
      c.style.display = "none";
    } else {
      c.style.display = "block";
    }
  });
});
