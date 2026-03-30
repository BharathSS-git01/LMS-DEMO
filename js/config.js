(function (global) {
  var DEFAULT_API_BASE = "https://lms-demo-production.up.railway.app";
  var PLACEHOLDER_API_BASE = "https://YOUR-RAILWAY-BACKEND.up.railway.app";
  var KNOWN_STATIC_ASSETS = {
    "assets/crr logo.jpg": "/assets/crr logo.jpg",
    "assets/devops.jpg": "/assets/DEVOPS.jpg",
    "assets/gen ai.jpg": "/assets/GEN AI.jpg",
    "assets/jntua logo.jpg": "/assets/jntuA logo.jpg",
    "assets/jntuk logo.png": "/assets/jntuk logo.png",
    "assets/jntuv logo.jpg": "/assets/jntuV logo.jpg",
    "assets/machine learning certificate.jpg": "/assets/Machine Learning Certificate.jpg",
    "assets/ml.jpg": "/assets/ML.jpg",
    "assets/qc.jpg": "/assets/QC.jpg",
    "assets/testimonial profile.jpg": "/assets/TESTIMONIAL PROFILE.jpg",
    "assets/vlsi.jpg": "/assets/VLSI.jpg"
  };

  function normalizeBase(base) {
    return String(base || "").replace(/\/+$/, "");
  }

  function getRuntimeConfigBase() {
    var runtimeConfig = global.LMS_RUNTIME_CONFIG || {};
    return normalizeBase(runtimeConfig.apiBaseUrl || runtimeConfig.API_BASE || "");
  }

  function isPlaceholderBase(base) {
    return normalizeBase(base) === PLACEHOLDER_API_BASE;
  }

  function isLocalHost() {
    var host = String((global.location && global.location.hostname) || "").toLowerCase();
    return !host || host === "localhost" || host === "127.0.0.1";
  }

  function isDemoModeEnabled() {
    var search = global.location && global.location.search ? new URLSearchParams(global.location.search) : null;

    if (search && search.get("demo") === "1") {
      return true;
    }

    try {
      return global.localStorage.getItem("lms_demo_mode") === "true";
    } catch (error) {
      return false;
    }
  }

  function getConfiguredApiBase() {
    var meta = document.querySelector('meta[name="lms-api-base"]');
    var metaBase = meta ? normalizeBase(meta.getAttribute("content")) : "";
    var storedBase = "";

    try {
      storedBase = normalizeBase(global.localStorage.getItem("lms_api_base"));
    } catch (error) {}

    if (isPlaceholderBase(storedBase)) {
      storedBase = "";
    }

    if (isPlaceholderBase(metaBase)) {
      metaBase = "";
    }

    return storedBase || metaBase || getRuntimeConfigBase() || DEFAULT_API_BASE;
  }

  var apiBase = getConfiguredApiBase();

  if (!apiBase && isLocalHost()) {
    apiBase = "http://localhost:5000";
  }

  function buildApiUrl(path) {
    var value = String(path || "");

    if (!value) {
      return apiBase;
    }

    if (/^https?:\/\//i.test(value)) {
      return value;
    }

    if (!apiBase) {
      return value.charAt(0) === "/" ? value : "/" + value;
    }

    return apiBase + (value.charAt(0) === "/" ? value : "/" + value);
  }

  function buildAssetUrl(path) {
    var value = String(path || "");
    var normalizedKey = value.replace(/\\/g, "/").replace(/^\.?\//, "").replace(/^(\.\.\/)+/, "").toLowerCase();

    if (!value || /^https?:\/\//i.test(value) || /^data:/i.test(value)) {
      return value;
    }

    if (/^blob:/i.test(value)) {
      return value;
    }

    if (/^\/?uploads\//i.test(value)) {
      var uploadPath = value.charAt(0) === "/" ? value : "/" + value;
      if (apiBase) {
        return apiBase + uploadPath;
      }
      return uploadPath;
    }

    if (/^(\.\.\/)+assets\//i.test(value) || /^assets\//i.test(value)) {
      return KNOWN_STATIC_ASSETS[normalizedKey] || ("/" + value.replace(/^(\.\.\/)+/, "").replace(/^\/+/, ""));
    }

    return value;
  }

  function buildUploadUrl(path) {
    var value = String(path || "");

    if (!value) {
      return value;
    }

    if (/^\/?uploads\//i.test(value)) {
      return buildAssetUrl(value);
    }

    if (value.indexOf("/uploads/") === 0) {
      return apiBase + value;
    }

    return buildAssetUrl(value);
  }

  global.API_BASE = apiBase;
  global.LMS_API = {
    API_BASE: apiBase,
    buildApiUrl: buildApiUrl,
    buildUploadUrl: buildUploadUrl,
    buildAssetUrl: buildAssetUrl,
    isLocalHost: isLocalHost(),
    isDemoMode: isDemoModeEnabled(),
    hasConfiguredApiBase: !!apiBase
  };
})(window);
