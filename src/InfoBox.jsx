import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function InfoBox({ info }) {
  //as props info
  const INIT_URL =
    "https://media.istockphoto.com/id/2165741070/photo/scenic-views-of-mumbai-india.jpg?s=612x612&w=is&k=20&c=rkRvtg9QvkIYM9mXGexLe6YPuNImZajm6hLKj2E4kKE=";
  let COLD_URL =
    "https://media.istockphoto.com/id/1316908666/photo/frozen-lake.webp?a=1&b=1&s=612x612&w=0&k=20&c=sFCey95Y4yA1K0WGXMo4QBFCHfIH8Vw_ufvi0JgU6M0=";
  let HOT_URL =
    "https://media.istockphoto.com/id/1137759901/photo/summer-hot-weather-season-high-temperature-thermometer-with-city-view.jpg?s=612x612&w=is&k=20&c=BGUWvOZp-tqxGzKABRNgMbBQUeNeirukuJqfP9Bf324=";
  let RAIN_URL =
    "https://plus.unsplash.com/premium_photo-1733436275328-bbb7da0fe4ae?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFpbiUyMHNlYXNvbiUyMGltYWdlfGVufDB8fDB8fHww";

  // let info={
  //     city:"Delhi",
  //     feelslike:24.84,
  //     temp:25.05,
  //     tempMin:25.05,
  //     tempMax:25.05,
  //     humidity:47,
  //     weather:"haze",
  // };
  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}{" "}
              {info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp > 15 ? (
                <WbSunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Temperature: {info.temp}&deg;C</p>
              <p>Humidity: {info.humidity}</p>
              <p>Min Temp: {info.tempMin}&deg;C</p>
              <p>Max Temp: {info.tempMax}&deg;C</p>
              <p>
                The weather can be described as <i>{info.weather}</i> and feels
                like: {info.feelsLike}&deg;C {/*fixed varaible name as L*/}
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
