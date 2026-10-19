function applyLang(lang) {
  var useFr = lang === "fr";
  document.documentElement.lang = useFr ? "fr" : "en";
  document.querySelectorAll("[data-en]").forEach(function (el) {
    var val = el.getAttribute(useFr ? "data-fr" : "data-en");
    if (val != null) el.textContent = val;
  });
  document.querySelectorAll("[data-ph-en]").forEach(function (el) {
    var val = el.getAttribute(useFr ? "data-ph-fr" : "data-ph-en");
    if (val != null) el.setAttribute("placeholder", val);
  });
  document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
    btn.classList.toggle("on", btn.getAttribute("data-lang-btn") === (useFr ? "fr" : "en"));
  });
}

document.addEventListener("click", function (e) {
  var btn = e.target.closest("[data-lang-btn]");
  if (!btn) return;
  applyLang(btn.getAttribute("data-lang-btn"));
});
