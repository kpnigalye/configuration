const configuration = {
  domain: "https://preprod.wru.ai",
  merchant: "esakal",
  merchantId: "130927",
  strategy:'content_similarity',
  articleLimit: 10,
  amp : {
    strategy:'content_similarity',
    articleLimit: 5,
  },
  secret: "keygen",
  fallBackImageUrl:
    "https://fea.assettype.com/esakal/images/SakalPlaceholder.png",
  customFields: [
    "MetaDescription",
  ],
  imgDomain: "https://qtstage-01.gumlet.io/",
};

window.wruConfig = configuration;
