
import React, { useRef } from 'react';
import { View, ScrollView } from 'react-native';
  import { useDispatch, useSelector } from 'react-redux';
import { HomeScreenNavigationProp } from '../../AppNavigation';
import { RootState } from '../../store/index';
import LandmarkThumb from '../../components/LandmarkThumb';
import { setLandmarkHeart } from '../../store/Landmarks';
import { RefLandmarkThumb } from '../../components/LandmarkThumb/types';
import { RefMap } from '../../components/Map/types';
import Map from '../../components/Map';
import styles from './styles';

const MapDisplay = ({ navigation }: HomeScreenNavigationProp) => {
  const { container, landmarksContainer, scrollView } = styles;
  const landmarks = useSelector((state: RootState) => state.landmarks);
  const landmarkThumbsRef = useRef<Array<RefLandmarkThumb>>([]);
  const mapRef = useRef<RefMap>();
  const dispatch = useDispatch();

  return (
    <View style={container}>
      <Map
        ref={(map: RefMap) => mapRef.current = map}
        landmarks={landmarks}
        onSelection={(landmark) => mapRef?.current?.changeLandmark(landmark.id)}
      />
      <View style={landmarksContainer}>
        <ScrollView horizontal style={scrollView}>
          {landmarks.map((landmark, key) => (
            <LandmarkThumb
              key={landmark.id}
              ref={(thumb: RefLandmarkThumb) => landmarkThumbsRef.current[key] = thumb}
              onPress={() => navigation.navigate('Details', { landmark: landmark })}
              onHeartPress={() => dispatch(setLandmarkHeart({ index: landmark.id - 1 }))}
              landmark={landmark}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default MapDisplay;
