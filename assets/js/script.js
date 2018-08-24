function ScrollTo(element) {
  var barHeight = $('.navbar').height();
  var divPosition = $(element).position().top;
  window.scroll({
    top: (divPosition - barHeight - 15)
  });
}
