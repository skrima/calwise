import { FaDrumstickBite, FaEgg, FaEnvira } from "react-icons/fa";

const activitiesData = [
  {
    label: "sedentary",
    desc: "Sedentary (little or no exercise, desk job)",
  },
  {
    label: "lightly active",
    desc: "Lightly active (light exercise or sports 1-3 days per week)",
  },
  {
    label: "moderately active",
    desc: "Moderately active (moderate exercise or sports 3-5 days per week)",
  },
  {
    label: "very active",
    desc: "Very active (hard exercise or sports 6-7 days per week)",
  },
  {
    label: "extra active",
    desc: "Extra active (very hard exercise or sports, physical job)",
  },
];

const habitsData = [
  {
    label: "smoking",
    desc: "Smoking",
  },
  {
    label: "alcohol",
    desc: "Alcohol consumption",
  },
];

const dietryData = [
  {
    label: "Non-vegetarian",
    Icon: FaDrumstickBite,
    class: "chicken-color",
  },
  {
    label: "Vegetarian",
    Icon: FaEgg,
    class: "egg-color",
  },
  {
    label: "Vegan",
    Icon: FaEnvira,
    class: "leaf-color",
  },
];

const medicalData = [
  {
    label: "diabetes",
    desc: "Diabetes",
  },
  {
    label: "hbp",
    desc: "High blood pressure",
  },
  {
    label: "allergies",
    desc: "Food allergies or intolerances",
  },
  {
    label: "gastro",
    desc: "Gastrointestinal disorders",
  },
  {
    label: "cancer",
    desc: "Cancer",
  },
];

const goalsData = [
  {
    label: "maintain",
    desc: "Maintain current weight",
  },
  {
    label: "lose",
    desc: "Lose weight",
  },
  {
    label: "gain",
    desc: "Gain weight",
  },
];

export { activitiesData, habitsData, dietryData, medicalData, goalsData };
