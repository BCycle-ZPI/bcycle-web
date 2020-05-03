import { Box, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './GroupTripInfo.scss';
import TripDetails from '../../components/trip-details/TripDetails';
import TripPhotos from '../../components/trip-photos/TripPhotos';
import TripParticipants from '../../components/trip-participants/TripParticipants';
import Scrollbars from 'react-custom-scrollbars';
import { GroupTrip } from '../../core/group-trip';
import { getParentGroupTrip } from '../../core/trips-client';
import { useParams } from 'react-router';
import NotFound from '../not-found/NotFound';

interface GroupTripInfoState {
  parentGroupTrip: GroupTrip | undefined;
}

export default function GroupTripInfo() {
  const { childTripId } = useParams();
  const [state, setState] = useState<GroupTripInfoState>();
  useEffect(() => {
    setState({ parentGroupTrip: getParentGroupTrip(+childTripId) });
  }, []);

  if (!state) return <Typography variant="h4">Loading...</Typography>;
  const tripInfo = state.parentGroupTrip;
  if (!tripInfo) return <NotFound />;

  return (
    <Grid id="wrapper" container justify="space-between">
      <Grid id="map-wrapper" container item direction="column" xs>
        <Box boxShadow={1} height="100%">
          <img alt="" id="map-image" src="/image-placeholder.png" />
        </Box>
      </Grid>

      <Grid id="info-wrapper" container item direction="column" xs>
        <Scrollbars id="scroll" autoHide>
          <Grid item>
            <TripDetails tripName={tripInfo.tripName} subject={tripInfo.subject} measures={tripInfo.measures} />
          </Grid>
          <Grid item>
            <TripParticipants participants={tripInfo.participants} />
          </Grid>
          {tripInfo.photosUrls.length > 0 ? renderPhotos(tripInfo.photosUrls) : <></>}
        </Scrollbars>
      </Grid>
    </Grid>
  );
}

const renderPhotos = (photosUrls: string[]) => (
  <Grid item>
    <TripPhotos photosUrls={photosUrls} />
  </Grid>
);

