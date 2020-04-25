import { Grid } from '@material-ui/core';
import React from 'react';
import Welcome from '../../components/welcome/Welcome';
import './TripInfo.scss';

export default function TripInfo() {
  return (
    <Grid id="wrapper" container justify="center">
      <Welcome />
    </Grid>
  );
}
