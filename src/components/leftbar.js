import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

const LEFT_TITLE_BAR = styled(Grid)(() => ({
  background: "transparent",
  // boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
  borderTopRightRadius: "199px",
  marginTop: "100px",
  borderBottomRightRadius: "199px",
  paddingLeft: "50px",
  paddingTop: "30px",
  width: "90%",
  paddingBottom: "20px",
  paddingRight: "30px",
  justifyContent: "center",
}));

const Title = styled("div")(({ theme }) => ({
  textAlign: "left",
  color: "#fff",
  fontFamily: "Roboto",
  fontSize: 22,
  fontWeight: 600,
  letterSpacing: 2,
  [theme.breakpoints.down("sm")]: {
    fontSize: 20,
  },
}));

const SubTitle = styled("div")(({ theme }) => ({
  backgroundImage: "linear-gradient(90deg, #fff 0%, #fff 100%)",
  backgroundSize: "100%",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  textAlign: "left",
  color: "#fff",
  fontFamily: "helvetica",
  fontSize: 16,
  fontWeight: 400,
  letterSpacing: 1.8,
  marginTop: 20,
  [theme.breakpoints.down("sm")]: {
    fontSize: 15,
  },
}));

export default function LeftTitleBar({ title, content }) {
  return (
    <LEFT_TITLE_BAR>
      <Grid item>
        <Grid container>
          <Grid item xs={6}>
            <Title>{title}</Title>
          </Grid>
          <Grid item md={6} xs={0}>
            <hr
              style={{
                height: 1.5,
                width: "70%",
                border: "none",
                background: "linear-gradient(90deg, #fff 0%, #fff 100%)",
                opacity: 0.8,
              }}
            ></hr>
          </Grid>
        </Grid>
        <hr
          style={{
            height: 2.0,
            width: "85%",
            border: "none",
            background: "linear-gradient(90deg, #222 0%, #fff 100%)",
            opacity: 0.8,
          }}
        ></hr>
        <SubTitle> {content}</SubTitle>
      </Grid>
    </LEFT_TITLE_BAR>
  );
}
