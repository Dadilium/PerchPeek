import React, { useState, useImperativeHandle, forwardRef, Ref } from 'react';
import MapView from 'react-native-maps';
import CustomMarker from '../CustomMarker';
import { startingLocation } from '../../constants';
import styles from './styles';
import { MapProps, RefMap } from './types';

const Map = forwardRef((props: MapProps, ref: Ref<RefMap>) => {
  const { container } = styles;
  const { landmarks, onSelection } = props;
  const [selectedLandmark, setSelectedLandmark] = useState(0)

  useImperativeHandle(ref, () => ({ changeLandmark }));

  const changeLandmark = (landmarkId: number) => { setSelectedLandmark(landmarkId); }

  return (
    <MapView
      style={container}
      initialRegion={startingLocation}
    >
      {landmarks.map((landmark) => (
        <CustomMarker
          key={landmark.id}
          landmark={landmark}
          isSelected={selectedLandmark === landmark.id}
          isHearted={false}
          onPress={() => onSelection(landmark)}
        />
      ))}
    </MapView>
  );
});

export default Map;
