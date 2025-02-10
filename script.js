$(document).ready(function () {
  $("#cross").click(function () {
    $(".navigation").css({ visibility: "hidden" });
  }),
    $("#menu").click(function () {
      $(".navigation").css({ visibility: "visible" });
    });
});
var flag = !0;
function downloadPDF() {
  var o = document.createElement("a");
  (o.href = "./images/resume.pdf"),
    (o.download = "vansh_resume.pdf"),
    document.body.appendChild(o),
    o.click(),
    document.body.removeChild(o);
}
$("#lg-dk").click(function () {
  flag
    ? ($("body").css({ "background-color": "rgba(255, 255, 255, 0.926)" }),
      $("#lg-dk").attr("src", "./images/darkmode.png").css({ width: "4vh" }),
      $("#menu").attr("src", "./images/menu1.png"),
      $(".profile,.what-i-do,.projects,.records,.contact").css({
        "background-color": "whitesmoke",
        "box-shadow":
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
        color: "grey",
      }),
      $("h3").css({ color: "black" }),
      $(".profile p a").css({ color: "rgb(4, 43, 101)" }),
      $(".lists ul li a").css({ color: "grey" }),
      $(".lists ul li a span").css({ color: "rgb(4, 43, 101)" }),
      $("h5").css({ color: "black" }),
      $("button").css({ "background-color": "grey" }),
      $(".links a img").css({ "background-color": "grey", color: "white" }),
      $(".navigation").css({ "background-color": "grey" }))
    : ($("body").css({ "background-color": "#19202E" }),
      $("#lg-dk").attr("src", "./images/lightmode.png"),
      $("#menu").attr("src", "./images/menu.png"),
      $(".profile,.what-i-do,.projects,.records,.contact").css({
        "background-color": "#1b2437f4",
        "box-shadow": "none",
        color: "white",
      }),
      $("h3").css({ color: "white" }),
      $(".profile p a").css({ color: "blue" }),
      $(".lists ul li a").css({ color: "white" }),
      $(".lists ul li a span").css({ color: "blue" }),
      $("h5").css({ color: "white" }),
      $("button").css({ "background-color": "#2b36495f" }),
      $(".links a img").css({ "background-color": "#21293a" }),
      $(".navigation").css({ "background-color": "#2b36495f" })),
    (flag = !flag);
}),
  document.addEventListener("contextmenu", (o) => o.preventDefault()),
  document.addEventListener("mousemove", (o) => {
    let c = document.getElementById("primary-cursor"),
      s = document.getElementById("secondary-cursor");
    (c.style.left = `${o.pageX}px`), (c.style.top = `${o.pageY}px`);
    let e = o.pageX,
      a = o.pageY,
      r = () => {
        (s.style.left = `${e}px`), (s.style.top = `${a}px`);
      };
    setTimeout(r, 100);
  }),
  $(document).ready(function () {
    var o = window.matchMedia("(max-width: 780px)"),
      c = !1;
    function s() {
      c
        ? $(".nav-content").css({ display: "" })
        : $(".nav-content").css({ display: "none" }),
        (c = !c);
    }
    o.matches && $("#menu").click(s),
      o.addListener(function (o) {
        o.matches
          ? $("#menu").off("click").on("click", s)
          : ($("#menu").off("click"),
            $(".nav-content").css({ display: "" }),
            (c = !1));
      });
  });
