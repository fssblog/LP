(function () {
  var measurementMeta = document.querySelector('meta[name="ga4-measurement-id"]');
  var measurementId = measurementMeta ? measurementMeta.getAttribute("content").trim() : "";

  if (!measurementId) {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };

  var script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(measurementId);
  document.head.appendChild(script);

  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    page_title: document.title,
    send_page_view: true
  });

  document.addEventListener("click", function (event) {
    var link = event.target.closest("[data-kpi-event]");
    if (!link || typeof window.gtag !== "function") {
      return;
    }

    window.gtag("event", link.dataset.kpiEvent, {
      event_category: "lp",
      event_label: link.dataset.kpiLabel || link.textContent.trim(),
      link_url: link.href
    });
  });
})();
