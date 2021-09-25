import { Helmet } from 'react-helmet';
import { Box, Container, Grid } from '@material-ui/core';
import React from 'react';
import WoodyBlissWeather from '../components/dashboard/WoodyBlissWeather';

const Dashboard = () => (
  <>
    <Helmet>
      <title>Woody Bliss</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={6}
            sm={6}
            xl={6}
            xs={12}
          >
            <iframe type="text/html" frameBorder="0" width="480" height="395"
                    src="//video.nest.com/embedded/live/0ZyoxI?autoplay=1" allowFullScreen style={{
              display: 'flex',
              flex: '1',
              borderRadius: 5,
              width: '100%'
            }}></iframe>
          </Grid>
          <Grid
            item
            lg={6}
            sm={6}
            xl={6}
            xs={12}
          >
            <WoodyBlissWeather />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Dashboard;
