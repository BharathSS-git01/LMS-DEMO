(function (global) {
  var DEFAULT_API_BASE = "https://YOUR-RAILWAY-BACKEND.up.railway.app";

  function normalizeBase(base) {
    return String(base || "").replace(/\/+$/, "");
  }

  function getConfiguredApiBase() {
    var meta = document.querySelector('meta[name="lms-api-base"]');
    var metaBase = meta ? normalizeBase(meta.getAttribute("content")) : "";
    var storedBase = "";

    try {
      storedBase = normalizeBase(global.localStorage.getItem("lms_api_base"));
    } catch (error) {}

    return storedBase || metaBase || DEFAULT_API_BASE;
  }

  var apiBase = getConfiguredApiBase();

  function buildApiUrl(path) {
    var value = String(path || "");

    if (!value) {
      return apiBase;
    }

    if (/^https?:\/\//i.test(value)) {
      return value;
    }

    return apiBase + (value.charAt(0) === "/" ? value : "/" + value);
  }

  function buildUploadUrl(path) {
    var value = String(path || "");

    if (!value || /^https?:\/\//i.test(value) || /^data:/i.test(value)) {
      return value;
    }

    if (value.indexOf("/uploads/") === 0) {
      return apiBase + value;
    }

    return value;
  }

  global.API_BASE = apiBase;
  global.LMS_API = {
    API_BASE: apiBase,
    buildApiUrl: buildApiUrl,
    buildUploadUrl: buildUploadUrl
  };
})(window);
