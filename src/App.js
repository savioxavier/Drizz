import React, { useState } from "react";
import dotenv from "dotenv";
import { red } from "@material-ui/core/colors";
import Search from "@material-ui/icons/Search";
import WeatherCards from "./components/WeatherCards";
import * as themes from "./components/Themes";
import {
  Button,
  CssBaseline,
  TextField,
  Typography,
  Container,
  Fade,
  makeStyles,
} from "@material-ui/core";

dotenv.config();

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: "1.1rem",
    fontFamily: "Lato, Roboto, sans-serif",
    fontWeight: 100,
  },
  input: {
    "& label.Mui-focused": {
      color: themes.randInputBorder,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: themes.randInputBorder,
      },
      "&:hover fieldset": {
        borderColor: themes.randInputBorder,
      },
      "&.Mui-focused fieldset": {
        borderColor: themes.randInputBorder,
      },
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: themes.randHue1,
    "&:hover": {
      backgroundColor: themes.randHue2,
    },
    "&:focused": {
      backgroundColor: themes.randHue2,
    },
  },
  error: {
    color: red[500],
  },
  footer: {
    backgroundColor: "transparent",
    color: "#fff",
    fontFamily: "'Lato', 'Roboto', sans-serif",
    fontSize: "1rem",
    textAlign: "center",
    position: "absolute",
    bottom: "20px",
    left: "50%",
    transform: "translate(-50%, -50%);",
  },
  link: {
    color: "#fff",
    fontWeight: "bold",
    textDecoration: "underline",
  },
}));

document.body.style.backgroundImage = `url(${themes.randBackground})`;
document.body.style.backgroundColor = themes.randHue2; // fallback

export default function App() {
  const [city, setCity] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const apiKey = process.env.REACT_APP_API_KEY;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then(function (resp) {
        return resp.json();
      })
      .then(function (data) {
        if (data.cod === 200) {
          setShowResults(true);
          const cityNameAndCountry =
            document.querySelector(".city-name-country");
          const tempResult = document.querySelector(".temp-result");
          const windSpeedResult = document.querySelector(".wind-speed-result");
          const humidityResult = document.querySelector(".humidity-result");
          const weatherTypeResult = document.querySelector(
            ".weather-type-result"
          );
          const errorText = document.querySelector(".error-text");
          const footerText = document.querySelector(".main-footer");

          cityNameAndCountry.textContent = `Weather for ${data.name}, ${data.sys.country}`;
          tempResult.textContent = `${Math.round(data.main.temp)}°C`;
          windSpeedResult.textContent = `${data.wind.speed} m/s`;
          humidityResult.textContent = `${data.main.humidity}%`;
          weatherTypeResult.textContent = data.weather[0].main;
          errorText.textContent = "";
          footerText.style.display = "none";
        } else {
          const errorText = document.querySelector(".error-text");
          errorText.textContent = "Invalid entry. Please try again";
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  const delay = 500;
  const duration = 500;

  const classes = useStyles();

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Fade
            in={true}
            style={{
              transitionDuration: `${duration * 1}ms`,
            }}
            {...(true ? { timeout: delay * 1 } : {})}
          >
            <Typography className={classes.heading} component="h1">
              Drizz · What's the weather like?
            </Typography>
          </Fade>
          <form className={classes.form} onSubmit={handleSubmit} noValidate>
            <Fade
              in={true}
              style={{
                transitionDuration: `${duration * 2}ms`,
              }}
              {...(true ? { timeout: delay * 2 } : {})}
            >
              <TextField
                className={classes.input}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="city"
                label="Search for a city"
                name="cityName"
                onChange={(event) => setCity(event.target.value)}
                autoFocus
              />
            </Fade>
            <Typography
              className={`${classes.error} error-text`}
              variant="subtitle2"
            />
            <Fade
              in={true}
              style={{
                transitionDuration: `${duration * 3}ms`,
              }}
              {...(true ? { timeout: delay * 3 } : {})}
            >
              <Button
                disableElevation
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                startIcon={<Search />}
              >
                Search
              </Button>
            </Fade>
          </form>
        </div>
      </Container>
      {showResults ? <WeatherCards /> : null}
      <Fade
        in={true}
        style={{
          transitionDuration: `${duration * 4}ms`,
        }}
        {...(true ? { timeout: delay * 4 } : {})}
      >
        <Container className={`${classes.footer} main-footer`}>
          <footer>
            Developed by Savio Xavier. Find me on{" "}
            <a href="https://github.com/savioxavier" className={classes.link}>
              Github
            </a>
          </footer>
        </Container>
      </Fade>
    </div>
  );
}
