import {
  FaUtensils,
  FaBullseye,
  FaGraduationCap,
  FaChartLine,
  FaHandshake,
} from "react-icons/fa";
import colors from "../variables/colors";

export default [
  {
    title: "Calorie Tracking",
    Icon: FaUtensils,
    desc: "Easily track your daily calorie intake with our user-friendly tool. Get insights into your nutrition and make adjustments to reach your weight goals.",
    color: colors.card_orange,
  },
  {
    title: "Personalized Calorie Goals",
    Icon: FaBullseye,
    desc: "Set achievable goals with personalized calorie tips based on your activity level, weight, and goals. Monitor your progress and adjust as needed to stay on track.",
    color: colors.card_green,
  },
  {
    title: "Nutrition Education",
    Icon: FaGraduationCap,
    desc: "Learn about nutrition, healthy eating, and weight management with our educational resources. Get expert advice and tips to support your weight loss journey.",
    color: colors.card_blue,
  },
  {
    title: "Progress Tracking",
    Icon: FaChartLine,
    desc: "Monitor your weight, body measurements, and other metrics to track your progress over time. See how far you've come and stay motivated to keep going.",
    color: colors.card_red,
  },
  {
    title: "Motivation and Support",
    Icon: FaHandshake,
    desc: "Get personalized feedback, encouragement, and tips to stay motivated and on track. Connect with a supportive community of like-minded individuals who are also on their weight loss journey.",
    color: colors.card_yellow,
  },
];
