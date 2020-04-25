import React from 'react';
import './App.scss';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import TripInfo from './trip-info/TripInfo';

export default function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar id="toolbar">
          <Typography variant="h5">BCycle</Typography>
        </Toolbar>
      </AppBar>
      <TripInfo />
    </div>
  );
}
