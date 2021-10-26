const configuration = {
  domain: "https://preprod.wru.ai",
  merchantId: "130927",
  strategy:'content_similarity',
  articleLimit: 10,
  // amp-specific configuaration
  amp: {
    strategy:'content_similarity',
    articleLimit: 5,    
  },
  secret: "keygen",
  defaultImageUrl:
    "https://images.news18.com/static_news18/pix/ibnhome/news18/images/default-300x200.jpg?impolicy=website&width=150&height=100",
};
