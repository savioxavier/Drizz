import {
  red,
  purple,
  indigo,
  teal,
  green,
  orange,
} from "@material-ui/core/colors";

export const opacity = "bf";

export const colors = [
  {
    // RED
    inputColor: red[900],
    bg: "https://i.pinimg.com/originals/bc/f1/91/bcf191d7d01a44be8a37b523d2309a62.jpg",
    hue1: `${red[400]}${opacity}`,
    hue2: `${red[600]}${opacity}`,
  },
  {
    // PURPLE
    inputColor: purple[900],
    bg: "https://wallpapercave.com/wp/wp5910896.jpg",
    hue1: `${purple[400]}${opacity}`,
    hue2: `${purple[600]}${opacity}`,
  },
  {
    // INDIGO
    inputColor: indigo[900],
    bg: "https://wallpapercave.com/wp/wp5121842.jpg",
    hue1: `${indigo[400]}${opacity}`,
    hue2: `${indigo[600]}${opacity}`,
  },
  {
    // TEAL
    inputColor: teal[900],
    bg: "https://wallpapercave.com/wp/wp5204106.jpg",
    hue1: `${teal[400]}${opacity}`,
    hue2: `${teal[600]}${opacity}`,
  },
  {
    // GREEN
    inputColor: green[900],
    bg: "https://wallpaperaccess.com/full/783289.jpg",
    hue1: `${green[400]}${opacity}`,
    hue2: `${green[600]}${opacity}`,
  },
  {
    // ORANGE
    inputColor: orange[900],
    bg: "https://images7.alphacoders.com/907/907157.jpg",
    hue1: `${orange[400]}${opacity}`,
    hue2: `${orange[600]}${opacity}`,
  },
];

export const getRandTheme = colors[Math.floor(Math.random() * colors.length)];

export const randInputBorder = getRandTheme.inputColor;
export const randBackground = getRandTheme.bg;
export const randHue1 = getRandTheme.hue1;
export const randHue2 = getRandTheme.hue2;
