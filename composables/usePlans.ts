export const usePlans = () => {
  const plans = [
    {
      title: "Insurance Products",
      desc: "Browse and purchase customized home, renters, and valuables insurance plans",
      img: "/img/cards/card1.png",
      url: "/insurance",
    },
    {
      title: "Real Estate Listings",
      desc: "Search homes and properties on our AI-powered real estate marketplace",
      img: "/img/cards/card2.png",
        url: "/real-estate",
    },
    {
      title: "Mortgages & Loans",
      desc: "Explore mortgage products and loan options for your home purchase",
      img: "/img/cards/card3.png",
      url: "/mortgage",
    },
    {
      title: "Customer Support",
      desc: "Contact our team for questions about your policies, claims, payments, and more",
      img: "/img/cards/card4.png",
      url: "/contact",
    },
    {
      title: "User Account",
      desc: "Manage your insurance policies, real estate listings, payments and personal details in your secure account portal.",
      img: "/img/cards/card5.png",
        url: "/account",
    },
    {
      title: "AI Assistant",
      desc: "Chat with our intelligent virtual assistant for quick help with any questions",
      img: "/img/cards/card6.png",
        url: "/assistant",
    },
  ];
  return{
    plans
  }
};
