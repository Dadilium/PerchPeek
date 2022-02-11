import React from 'react';
import { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import { CustomMarkerProps } from './types';

const CustomMarker = (props: CustomMarkerProps) => {
  const { heart } = styles;
  const { landmark, isSelected, isHearted, onPress } = props;
  const markerColor = isSelected ? '#2080c9' : 'grey';

  return (
    <Marker
      coordinate={{ latitude: landmark.latlng.latitude, longitude: landmark.latlng.longitude }}
      onPress={onPress}
    >
      <Icon name={'map-marker'} size={50} color={markerColor} />
      {isHearted
        && <Icon name={'heart'} size={18} color={'red'} style={heart} />
      }
    </Marker>
  );
};

export default CustomMarker;
