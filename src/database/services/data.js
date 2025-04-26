import yogaGoldIcon from "@services/yoga-gold.png";
import yogaWhiteIcon from "@services/yoga-white.png";

/* Service Data Array */
const serviceData = [
  {
    title: "Yoga",
    activeIcon: yogaWhiteIcon,
    inActiveIcon: yogaGoldIcon,
  },
];

/* Cards Data Array */
const cardsData = [
  [
    // Courses under Yoga service
    {
      header: "Starter",
      price: "0 Rs  ",
      buttonText: "Book now",
      className: "basic",
      cardContainer: "yoga",
      elements: [
        "Online Yoga",
        "For the duration of 4 sessions",
        "45 minutes each Friday",
        "Learn all the basic yoga poses",
      ],
    },
    {
      header: "Professional",
      price: "6000 Rs",
      buttonText: "Book now",
      className: "standard",
      cardContainer: "yoga",
      elements: [
        "In-person Yoga",
        "For the duration of 6 weeks",
        "3 sessions per week",
        "Learn advance yoga poses",
      ],
    },
    {
      header: "Champion",
      price: "12000 Rs",
      buttonText: "Book now",
      className: "premium",
      cardContainer: "yoga",
      elements: [
        "Online Yoga",
        "For the duration of 8 weeks",
        "4 sessions per week",
        "Cultivate inner peace & mindfulness",
      ],
    },
  ],
];

export { cardsData, serviceData };