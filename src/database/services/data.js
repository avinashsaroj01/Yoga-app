import yogaGoldIcon from "@services/yoga-gold.png";
import yogaWhiteIcon from "@services/yoga-white.png";

/* Service Data Array */
const serviceData = [
  {
    title: "Yog",
    activeIcon: yogaWhiteIcon,
    inActiveIcon: yogaGoldIcon,
  },
];

/* Cards Data Array */
const cardsData = [
  [
    // Courses under Yog service
    {
      header: "Free Session",
      price: "0 Rs  ",
      buttonText: "Book now",
      className: "basic",
      cardContainer: "yoga",
      elements: [
        "Online Yog ( Group yog)",
        "1 hour each",
        " 6-7 AM Mon-Fri",
        "This session is for obesity, diabetes, alignment, and general fitness",
      ],
    },
    {
      header: "Professional",
      price: "9990 Rs",
      buttonText: "Book now",
      className: "standard",
      cardContainer: "yoga",
      elements: [
        "Online Yog ( One on One sessoin )",
        "20 classes in a month",
        " 1 hour each Mon-Fri",
        "Diet Plan + Daily routine guidance",
        "Disease specific yog practice",
      ],
    },
    // {
    //   header: "Champion",
    //   price: "12000 Rs",
    //   buttonText: "Book now",
    //   className: "premium",
    //   cardContainer: "yoga",
    //   elements: [
    //     "Online Yog",
    //     "For the duration of 8 weeks",
    //     "4 sessions per week",
    //     "Cultivate inner peace & mindfulness",
    //   ],
    // },
  ],
];

export { cardsData, serviceData };