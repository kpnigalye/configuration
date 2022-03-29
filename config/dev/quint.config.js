const configuration = {
  domain: "https://alfred.wru.ai",
  merchant: "thequint",
  merchantId: "130915",
  merchantDomain: "testing-quint-widget.glitch.me",
  strategy: "qwwidget",
  articleLimit: 12,
  multipleWidgets: true,
  secret: "keygen",
  fallBackImageUrl:
    "https://images.thequint.com/thequint/2021-06/b02e0cf0-8e1f-46e7-b75f-eac28f2dae78/quint_hero_light.svg",
  imgDomain: "https://images.thequint.com/",
  excludeArticlePublishDate: true,
  stylesheet: "https://cdn.jsdelivr.net/gh/kpnigalye/configuration/css/quint/quint-wru-widget.css",
  disableWruAnalytics: true,
};

window.wruConfig = configuration;
