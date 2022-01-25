const configuration = {
  domain: "https://alfred.wru.ai",
  merchant: "quint",
  merchantId: "130915",
  strategy: "qwwidget",
  articleLimit: 4,
  multipleWidgets: true,
  abTesting: {
    enabled: false,
    wruWidget: 0.8,
    clientWidget: 0.2,
  },
  secret: "keygen",
  fallBackImageUrl:
    "https://images.news18.com/static_news18/pix/ibnhome/news18/images/default-300x200.jpg?impolicy=website&width=150&height=100",
  customFields: [],
  imgDomain: "https://images.thequint.com/",
};

window.wruConfig = configuration;
