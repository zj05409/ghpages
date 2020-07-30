(function() {
  var header = document.getElementById("mainHeader");

  function changeHeader() {
    var scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    header.classList.toggle(
      "header-background",
      scrollTop >= 50 || document.body.classList.contains("nav-open")
    );
  }

  var didScroll = false;

  $(window).scroll(function() {
    didScroll = true;
  });

  setInterval(function() {
    if (didScroll) {
      didScroll = false;
      changeHeader();
    }
  }, 100);

  changeHeader();

  document
    .getElementById("open-nav")
    .addEventListener("click", function(event) {
      event.preventDefault();
      document.body.classList.toggle("nav-open");
      changeHeader();
    });

  $("a[href*=\\#]").on("click", function(event) {
    if (this.pathname === window.location.pathname) {
      event.preventDefault();

      $("html, body").animate(
        {
          scrollTop: $(this.hash).offset().top
        },
        500
      );
    }
  });

  //   随机更换图片
  $(document).ready(function() {
    // 16为images文件夹有16张，可随意更换数值
    let ranNum = Math.floor(Math.random() * 16);
    $("#randomImage").fadeIn("slow");
    $("#randomImage").css(
      "background-image",
      `url(/images/abstract/a${ranNum}.jpg)`
    );
  });
})();
