import React from 'react';
import { Typography, Grid } from '@material-ui/core';

const About = () => (
  <Grid container direction="column" justify="space-around" alignItems="center">
    <Grid>
      <Typography>
        Zenika Resume - Build by&nbsp;
        <a href="http://zenika.com/" target="_blank">Zenika</a>
        &nbsp; Powered by&nbsp;
        <a href="https://github.com/TailorDev/monod" target="_blank">Monod</a>
      </Typography>
    </Grid>
  </Grid>
);

export default About;
