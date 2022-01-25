const configuration = {
  domain: "https://api.wru.ai",
  merchant: "esakal",
  merchantDomain: "esakal.com",
  merchantId: "130927",
  strategy: "content_similarity",
  articleLimit: 10,
  secret: "keygen",
  fallBackImageUrl:
    "https://fea.assettype.com/esakal/images/SakalPlaceholder.png",
  customFields: ["MetaDescription"],
  imgDomain: "https://gumlet.assettype.com/",
};

window.wruConfig = configuration;

