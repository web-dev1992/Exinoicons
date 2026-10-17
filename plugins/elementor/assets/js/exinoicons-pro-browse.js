jQuery(document).ready(function ($) {
  $("body").on("click", ".exinoicons-icon-control", function () {
    var modal = $("#exinoicons-pro-icons-modal");
    // Show the modal
    modal.fadeIn(300);
    // set display to flex
    modal.css("display", "flex");

    // Initialize the React app
    if (window.ExinoiconsReactApp) {
      console.log("Init react");
      window.ExinoiconsReactApp.init("exinoicons-icon-browser-app");
    }
  });

  $(window).on("click", function (event) {
    var modal = $("#exinoicons-pro-icons-modal");
    if (
      $(event.target).is(modal) ||
      $(event.target).is(".elementor-templates-modal__header__close i")
    ) {
      modal.fadeOut(300);
    }

    if ($(event.target).is("#exinoicons__icon-select")) {
      var iconSVG = $("#exinoicons__selected-icon-svg").text();
      // change width and height to 100% in the svg tag
      iconSVG = iconSVG.replace(/width="(\d+)"/, 'width="100%"');
      iconSVG = iconSVG.replace(/height="(\d+)"/, 'height="100%"');

      // Replace all "#141B34" with "currentColor"
      iconSVG = iconSVG.replace(/#141B34/g, "currentColor");

      if (!iconSVG) {
        modal.fadeOut(300);
        return;
      }

      $(".exinoicons-icon-value-input").val(iconSVG).trigger("input");
      $(".exinoicons-control-icon__preview").html(iconSVG);
      modal.fadeOut(300);
    }
  });
});
