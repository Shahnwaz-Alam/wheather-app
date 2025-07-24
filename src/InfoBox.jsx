import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import LightModeIcon from "@mui/icons-material/LightMode";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

export default function InfoBox({ info }) {
  const COLD_URL =
    "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const HOT_URL =
    "https://images.unsplash.com/photo-1447601932606-2b63e2e64331?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8SE9UJTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const RAIN_URL =
    "https://media.istockphoto.com/id/2166330742/photo/mumbai-monsoon-man.webp?a=1&b=1&s=612x612&w=0&k=20&c=XJBghA5CIenFGXTSGy62e2xAplxVCJOjj_39h2FKUWs=";

  if (!info) return <div>Loading...</div>;

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
            title="weather"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}{" "}
              {info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 15 ? <LightModeIcon /> : <AcUnitIcon />}
            </Typography>
            <Typography variant="body2" color="text.secondary" component="span">
              <p>Temperature = {info.temp}°C</p>
              <p>Humidity = {info.humidity}%</p>
              <p>Min Temp = {info.tempMin}°C</p>
              <p>Max Temp = {info.tempMax}°C</p>
              <p>
                The Weather is <i>{info.weather}</i> and feels like {info.feelsLike || info.feelslike}°C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}