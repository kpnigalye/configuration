const configuration = {
  domain: "https://api.wru.ai",
  merchant: "esakal",
  merchantId: "130927",
  merchantDomain: "esakal.com",
  strategy: "content_similarity",
  articleLimit: 10,
  multipleWidgets: false,
  abTesting: {
    enabled: true,
    wruWidget: 0.8,
    clientWidget: 0.2,
  },
  secret: "keygen",
  fallBackImageUrl:
    "https://fea.assettype.com/esakal/images/SakalPlaceholder.png",
  customFields: ["MetaDescription"],
  imgDomain: "https://gumlet.assettype.com/",
};

window.wruConfig = configuration;
