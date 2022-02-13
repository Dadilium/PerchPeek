import React, { useState, useImperativeHandle, Ref } from 'react';
import MapView from 'react-native-maps';
import CustomMarker from '../CustomMarker';
import { startingLocation } from '../../constants';
import styles from './styles';
import { MapProps, RefMap } from './types';

const Map = React.forwardRef((props: MapProps, ref: Ref<RefMap>) => {
  const { container } = styles;
  const { landmarks, onSelection } = props;
  const [selectedLandmark, setSelectedLandmark] = useState(0);
  const changeLandmark = (landmarkId: number) => { setSelectedLandmark(landmarkId); };
  useImperativeHandle(ref, () => ({ changeLandmark }));

  return (
    <MapView
      style={container}
      initialRegion={startingLocation}
    >
      {landmarks.map((landmark) => (
        <CustomMarker
          key={landmark.id}
          landmark={landmark}
          testID={`marker-item-${landmark.id}`}
          isSelected={selectedLandmark === landmark.id}
          onPress={() => onSelection(landmark)}
        />
      ))}
    </MapView>
  );
});

Map.displayName = 'Map';
export default Map;
