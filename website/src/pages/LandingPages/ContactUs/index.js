// @mui material components
import Grid from "@mui/material/Grid";
import Slider from '@mui/material/Slider';
import Switch from '@mui/material/Switch';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Image
import bgImage1 from "assets/images/illustrations/bluejacket.png";
import bgImage2 from "assets/images/illustrations/graytshirt.png";
import bgImage3 from "assets/images/illustrations/joggers.jpeg";

function ContactUs() {
  return (
    <>
      <MKBox position="fixed" top="0.5rem" width="100%">
        <DefaultNavbar
          routes={routes}
          action={{
            type: "external",
            route: "https://www.creative-tim.com/product/material-kit-react",
            label: "generate fit",
            color: "info",
          }}
        />
      </MKBox>
      <Grid container mt={12} spacing={2} alignItems="center">
        <Grid item xs={12} lg={6} justifyContent="center">
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} justifyContent="center" display="flex">
              <MKBox
                bgColor="white"
                borderRadius="xl"
                shadow="lg"
                display="flex"
                flexDirection="row"
                justifyContent="center"
                width="100%"
                ml={{ xs: "auto", lg: 6 }}
                mr={{ xs: "auto", lg: 6 }}
              >
                <img height="100%" width="200" style={{ objectFit: "cover" }} src={bgImage1}></img>
                <Grid container display="flex" flexDirection="column" ml={5} mr={10}>
                  <Grid item>
                    <MKTypography variant="h4" mt={2}>
                      Blue Zara Puffer Jacket
                    </MKTypography>
                  </Grid>
                  <Grid item>
                    <MKTypography variant="body2" color="text" mt={2}>
                      Comfort: 3
                    </MKTypography>
                    <Slider disabled defaultValue={30} />
                  </Grid>
                  <Grid item>
                    <MKTypography variant="body2" color="text" mt={1}>
                      Streetwear: 7
                    </MKTypography>
                    <Slider disabled defaultValue={70} />
                  </Grid>
                  <Grid item>
                    <MKTypography variant="body2" color="text" mt={1} mb={2}>
                      Category: Heavy Jacket
                    </MKTypography>
                  </Grid>
                </Grid>
              </MKBox>
            </Grid>
            <Grid item xs={12} justifyContent="center" display="flex">
              <MKBox
                bgColor="white"
                borderRadius="xl"
                shadow="lg"
                display="flex"
                flexDirection="row"
                justifyContent="center"
                width="100%"
                ml={{ xs: "auto", lg: 6 }}
                mr={{ xs: "auto", lg: 6 }}
              >
                <img height="100%" width="200" style={{ objectFit: "cover" }} src={bgImage2}></img>
                <Grid container display="flex" flexDirection="column" ml={5} mr={10}>
                  <Grid item>
                    <MKTypography variant="h4" mt={2}>
                      Gray Banana Republic Tshirt
                    </MKTypography>
                  </Grid>
                  <Grid item>
                    <MKTypography variant="body2" color="text" mt={2}>
                      Comfort: 8
                    </MKTypography>
                    <Slider disabled defaultValue={80} />
                  </Grid>
                  <Grid item>
                    <MKTypography variant="body2" color="text" mt={1}>
                      Streetwear: 5
                    </MKTypography>
                    <Slider disabled defaultValue={50} />
                  </Grid>
                  <Grid item>
                    <MKTypography variant="body2" color="text" mt={1} mb={2}>
                      Category: Tshirt
                    </MKTypography>
                  </Grid>
                </Grid>
              </MKBox>
            </Grid><Grid item xs={12} justifyContent="center" display="flex">
              <MKBox
                bgColor="white"
                borderRadius="xl"
                shadow="lg"
                display="flex"
                flexDirection="row"
                justifyContent="center"
                width="100%"
                ml={{ xs: "auto", lg: 6 }}
                mr={{ xs: "auto", lg: 6 }}
              >
                <img height="100%" width="200" style={{ objectFit: "cover" }} src={bgImage3}></img>
                <Grid container display="flex" flexDirection="column" ml={5} mr={10}>
                  <Grid item>
                    <MKTypography variant="h4" mt={2}>
                      Black H&M Joggers
                    </MKTypography>
                  </Grid>
                  <Grid item>
                    <MKTypography variant="body2" color="text" mt={2}>
                      Comfort: 7
                    </MKTypography>
                    <Slider disabled defaultValue={70} />
                  </Grid>
                  <Grid item>
                    <MKTypography variant="body2" color="text" mt={1}>
                      Streetwear: 9
                    </MKTypography>
                    <Slider disabled defaultValue={90} />
                  </Grid>
                  <Grid item>
                    <MKTypography variant="body2" color="text" mt={1} mb={2}>
                      Category: Joggers
                    </MKTypography>
                  </Grid>
                </Grid>
              </MKBox>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          lg={4}
          ml={{ xs: "auto", lg: 4 }}
          mr={{ xs: "auto", lg: 4 }}
        >
          <MKBox
            bgColor="white"
            borderRadius="xl"
            shadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={{ xs: 20, sm: 18, md: 20 }}
            mb={{ xs: 20, sm: 18, md: 20 }}
            mx={3}
          >
            <MKBox
              variant="gradient"
              bgColor="info"
              coloredShadow="info"
              borderRadius="lg"
              p={2}
              mx={2}
              mt={-3}
            >
              <MKTypography variant="h3" color="white">
                Today's fit
              </MKTypography>
            </MKBox>
            <MKBox p={3}>
              <MKTypography variant="body2" color="text" mb={3}>
                Input this form below with the day's temperature, desired comfortability
                level, and style (streetwear/formal) to generate your outfit!
              </MKTypography>
              <MKBox width="100%" component="form" method="post" autocomplete="off">
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <MKInput
                      variant="standard"
                      label="Temperature (°F)"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                  </Grid>
                  {/* <Grid item xs={12} md={6}>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Switch />
                        }
                        label="Favorite outfit?"
                      />
                    </FormGroup>
                  </Grid> */}
                  <Grid item xs={12}>
                    <MKInput
                      variant="standard"
                      label="Comfort"
                      placeholder="Rate on a scale from 1 (comfort) to 10 (stylish)"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <MKInput
                      variant="standard"
                      label="Streetwear"
                      placeholder="Rate on a scale from 1 (streetwear) to 10 (formal)"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                  </Grid>
                </Grid>
                <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                  <MKButton variant="gradient" color="info">
                    Generate Outfit
                  </MKButton>
                </Grid>
              </MKBox>
            </MKBox>
          </MKBox>
        </Grid>
      </Grid>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default ContactUs;
