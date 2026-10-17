/**
 * Exinoicons FAQ Widget JavaScript
 *
 * Handles the accordion functionality for the FAQ widget.
 */
(function ($) {
  "use strict";

  // Initialize FAQ widgets
  function initFaqWidgets() {
    $(".exinoicons__faq-widget").each(function () {
      var $widget = $(this);
      var allowMultiple =
        $widget.data("multiple") === true ||
        $widget.data("multiple") === "true";

      $widget.find(".exinoicons__faq-question").on("click", function () {
        var $item = $(this).closest(".exinoicons__faq-item");
        var isActive = $item.hasClass("active");

        if (!allowMultiple) {
          // Close all other items
          $widget
            .find(".exinoicons__faq-item")
            .not($item)
            .removeClass("active");
        }

        // Toggle current item
        $item.toggleClass("active", !isActive);
      });
    });
  }

  // Initialize on document ready
  $(document).ready(function () {
    initFaqWidgets();
  });

  // Re-initialize when Elementor frontend is ready (for live preview)
  $(window).on("elementor/frontend/init", function () {
    if (typeof elementorFrontend !== "undefined") {
      elementorFrontend.hooks.addAction(
        "frontend/element_ready/exinoicons-faq.default",
        function ($scope) {
          initFaqWidgets();
        },
      );
    }
  });
})(jQuery);
