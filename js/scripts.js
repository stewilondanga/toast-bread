var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

document.querySelector(".bread").addEventListener("animationend", function() {
  if (document.getElementById("checkbox-1").checked == true) {
    document.getElementById("checkbox-1").checked = false;
  }
});
