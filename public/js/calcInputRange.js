
document.querySelectorAll(".range").forEach(function (el) {
  el.oninput = function () {
    var valPercent = (el.valueAsNumber - parseInt(el.min)) /
      (parseInt(el.max) - parseInt(el.min));
    var style = 'background-image: -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(' + valPercent + ', #F77806), color-stop(' + valPercent + ', #123757));';
    el.style = style;
  };
  el.oninput();

});