const configuration = {
  domain: "https://preprod.wru.ai",
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
};

window.wruConfig = configuration;
