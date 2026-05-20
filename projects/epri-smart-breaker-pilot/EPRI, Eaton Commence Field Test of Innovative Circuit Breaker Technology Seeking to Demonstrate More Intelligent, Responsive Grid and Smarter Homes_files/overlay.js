(function () {
  "use strict";

  function closest(el, selector) {
    var matchesSelector =
      el.matches ||
      el.webkitMatchesSelector ||
      el.mozMatchesSelector ||
      el.msMatchesSelector;

    while (el) {
      if (matchesSelector.call(el, selector)) {
        return el;
      } else {
        el = el.parentElement;
      }
    }
    return null;
  }

  function validateUnits(units) {
    var i = new Image();
    i.style.width = units;
    return i.style.width;
  }

  function closeOverlay() {
    removeEventListeners();

    var overlays = document.getElementsByClassName("lookbook-overlay");

    if (overlays.length > 0) {
      for (var i = 0; i < overlays.length; i += 1) {
        overlays[i].parentNode.removeChild(overlays[i]);
      }
    }

    var currentUrl = new URL(window.location.href);
    var searchParams = currentUrl.searchParams;

    // remove overlay_url param
    searchParams.delete("overlay_url");

    var newUrl = window.location.origin + window.location.pathname;
    var remainingParams = searchParams.toString();
    if (remainingParams) {
      newUrl += "?" + remainingParams;
    }

    window.history.pushState({}, window.document.title, newUrl);
  }

  function closeOverlayOnClick() {
    closeOverlay();
  }

  function closeOverlayOnBackgroundClick(event) {
    if (event.target.id === "lookbook-overlay-mask") {
      closeOverlay();
    }
  }

  function handleKeyEvents(event) {
    event = event || window.event;
    var isEscape = false;
    if ("key" in event) {
      isEscape = event.key === "Escape" || event.key === "Esc";
    } else {
      isEscape = event.keyCode === 27;
    }
    if (isEscape) {
      closeOverlay();
    } else if (event.key === "Tab") {
      trapFocus(event);
    }
  }

  function trapFocus(event) {
    const overlay = document.getElementById("lookbook-overlay-mask");
    const iframe = overlay.querySelector("iframe");

    function isVisible(element) {
      return element.offsetParent !== null;
    }

    let focusableElements = [
      ...overlay.querySelectorAll(
        "button, a[href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
      ),
    ].filter(isVisible);

    // Include focusable elements inside the iframe
    if (iframe && iframe.contentDocument) {
      const iframeFocusableElements = [
        ...iframe.contentDocument.querySelectorAll(
          "button, a[href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
        ),
      ].filter(isVisible);
      focusableElements = [...iframeFocusableElements, ...focusableElements];
    }

    if (focusableElements.length > 0) {
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      event.preventDefault();
      if (event.shiftKey && document.activeElement === firstElement) {
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        firstElement.focus();
      }
    }
  }

  function removeEventListeners() {
    var closeButton = document.getElementById("lookbook-overlay-close");
    closeButton.removeEventListener("click", closeOverlayOnClick);
    document.removeEventListener("keydown", handleKeyEvents);
    document.removeEventListener("click", closeOverlayOnBackgroundClick);
  }

  function showOverlay(
    url,
    overlayWidth,
    overlayHeight,
    shouldCloseOverlayOnBackgroundClick,
    target
  ) {
    if (!url) {
      return false;
    }
    var iframe = document.createElement("iframe");
    iframe.className = "lookbook-overlay-content";
    iframe.title = "overlay-content";
    iframe.src = url;
    iframe.style.width = overlayWidth;
    iframe.style.height = overlayHeight;
    iframe.setAttribute("webkitallowfullscreen", true);
    iframe.setAttribute("mozallowfullscreen", true);
    iframe.setAttribute("allowfullscreen", true);

    iframe.addEventListener("load", () => {
      try {
        // Attempt to access iframe document (may throw for cross-origin frames)
        if (iframe.contentWindow && iframe.contentWindow.document) {
          const iframeDoc = iframe.contentWindow.document;
          iframe.focus();
          // Add Escape key listener to the iframe's document
          iframeDoc.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
              closeOverlay();
            }
          });
        }
      } catch (e) {
        console.log("Unable to access iframe document");
      }
    });

    var closeButtonWrapper = document.createElement("div");
    closeButtonWrapper.style.height = overlayHeight;
    closeButtonWrapper.className = "lookbook-overlay-close-wrapper";
    var closeButton = document.createElement("button");
    closeButton.id = "lookbook-overlay-close";
    closeButton.setAttribute("aria-label", "Close");
    closeButton.className = "lookbook-overlay-close";
    closeButton.innerHTML = "<span>&times;</span>";
    closeButton.addEventListener("click", closeOverlayOnClick);
    closeButtonWrapper.appendChild(closeButton);

    var closeButtonBackgroundColor = target.getAttribute(
      "data-lookbook-close-background-color"
    );
    if (closeButtonBackgroundColor) {
      closeButton.style.backgroundColor = closeButtonBackgroundColor;
    }

    var overlay = document.createElement("div");
    overlay.id = "lookbook-overlay-mask";
    overlay.className = "lookbook-overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-label", "overlay-content");
    overlay.setAttribute("aria-hidden", "false");
    overlay.appendChild(iframe);
    overlay.appendChild(closeButtonWrapper);

    document.body.appendChild(overlay);
    document.addEventListener("keydown", handleKeyEvents);
    if (shouldCloseOverlayOnBackgroundClick) {
      document.addEventListener("click", closeOverlayOnBackgroundClick);
    }
  }

  document.addEventListener("click", function (event) {
    var url;
    var queryString = "";
    var overlayQueryString = "lb-mode=overlay";
    var target = closest(event.target, "[data-lookbook-overlay-href]");
    if (target) {
      url = target.getAttribute("data-lookbook-overlay-href");
      queryString = overlayQueryString;
    }
    if (!url) {
      target = closest(event.target, "[href*='" + overlayQueryString + "']");
      if (target) {
        var search = "?" + target.href.split("?")[1];
        if (
          search &&
          search.substring(1).split("&").indexOf(overlayQueryString) > -1
        ) {
          url = target.href;
        }
      }
    }
    if (url) {
      if (target.tagName === "A" || target.tagName === "AREA") {
        event.preventDefault();
      }
      var overlayWidth = validateUnits(
        target.getAttribute("data-lookbook-overlay-width") || "80%"
      );
      var overlayHeight = validateUnits(
        target.getAttribute("data-lookbook-overlay-height") || "80%"
      );
      var shouldCloseOverlayOnBackgroundClick =
        target.getAttribute("data-lookbook-bg-click-close") === "true";

      queryString += "&lb-width=" + encodeURIComponent("100%");
      queryString += "&lb-height=" + encodeURIComponent("100%");

      url = url + (url.indexOf("?") === -1 ? "?" : "&") + queryString;
      showOverlay(
        url,
        overlayWidth,
        overlayHeight,
        shouldCloseOverlayOnBackgroundClick,
        target
      );
    }
  });
})();