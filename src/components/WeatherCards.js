import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grow from "@material-ui/core/Grow";
import { makeStyles } from "@material-ui/core/styles";
import * as themes from "./Themes";

const useStyles = makeStyles((theme) => ({
  smallText: {
    fontSize: "1rem",
    fontFamily: "'Lato', 'Roboto', sans-serif",
    fontWeight: 800,
  },
  root: {
    backgroundColor: themes.randHue1,
    backdropFilter: "blur(5px)",
    wordWrap: "break-word",
    marginBottom: "5px",
  },
  heading: {
    fontFamily: "'Cascadia Code', 'Cascadia Mono', 'Consolas', monospace",
  },
  text: {
    fontSize: "1.75rem",
    fontFamily: "'JetBrains Mono', 'Consolas', monospace",
  },
}));

function WeatherCards() {
  const classes = useStyles();

  return (
    <Container>
      <Grow
        in={true}
        style={{
          transformOrigin: "0 0 0",
        }}
        {...(true ? { timeout: 2000 } : {})}
      >
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography
              className={`${classes.smallText} city-name-country`}
              variant="h4"
              color="textSecondary"
            />
          </CardContent>
        </Card>
      </Grow>
      <Grow
        in={true}
        style={{
          transformOrigin: "0 0 0",
        }}
        {...(true ? { timeout: 2500 } : {})}
      >
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography className={classes.heading} variant="h5" gutterBottom>
              Temp
            </Typography>
            <Typography
              className={`${classes.text} temp-result`}
              variant="h3"
              color="textSecondary"
            />
          </CardContent>
        </Card>
      </Grow>
      <Grow
        in={true}
        style={{
          transformOrigin: "0 0 0",
        }}
        {...(true ? { timeout: 3000 } : {})}
      >
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography className={classes.heading} variant="h5" gutterBottom>
              Wind Speed
            </Typography>
            <Typography
              className={`${classes.text} wind-speed-result`}
              variant="h3"
              color="textSecondary"
            />
          </CardContent>
        </Card>
      </Grow>
      <Grow
        in={true}
        style={{
          transformOrigin: "0 0 0",
        }}
        {...(true ? { timeout: 3500 } : {})}
      >
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography className={classes.heading} variant="h5" gutterBottom>
              Humidity
            </Typography>
            <Typography
              className={`${classes.text} humidity-result`}
              variant="h3"
              color="textSecondary"
            />
          </CardContent>
        </Card>
      </Grow>
      <Grow
        in={true}
        style={{
          transformOrigin: "0 0 0",
        }}
        {...(true ? { timeout: 4000 } : {})}
      >
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography className={classes.heading} variant="h5" gutterBottom>
              Weather Type
            </Typography>
            <Typography
              className={`${classes.text} weather-type-result`}
              variant="h3"
              color="textSecondary"
            />
          </CardContent>
        </Card>
      </Grow>
    </Container>
  );
}

export default WeatherCards;
