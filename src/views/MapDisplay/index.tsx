
import React, { useRef } from 'react';
import { View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { HomeScreenNavigationProp } from '../../AppNavigation';
import { RootState } from '../../store/index';
import LandmarkThumb from '../../components/LandmarkThumb';
import { setLandmarkHeart } from '../../store/Landmarks';
import Map from '../../components/Map';
import styles from './styles';
import { HomeProps } from './types';
import { RefMap } from '../../components/Map/types';
import { RefLandmarkThumb } from '../../components/LandmarkThumb/types';

const MapDisplay = (props: HomeProps) => {
  const { container, landmarksContainer, scrollView } = styles;
  const navigation = useNavigation<HomeScreenNavigationProp['navigation']>();
  const dispatch = useDispatch();
  const landmarks = useSelector((state: RootState) => state.landmarks)
  const mapRef = useRef<RefMap>();
  const landmarkThumbsRef = useRef<Array<RefLandmarkThumb>>([]);
  const { } = props;

  return (
    <View style={container}>
      <Map
        ref={(map: RefMap) => mapRef.current = map}
        landmarks={landmarks}
        onSelection={(landmark) => {
          console.log(landmark);
          landmarkThumbsRef.current[landmark.id - 1].zoomIn();
          // navigation.navigate('Details', { landmark: landmark })
        }}
      />
      <View style={landmarksContainer}>
        <ScrollView horizontal style={scrollView}>
          {landmarks.map((landmark, key) => (
            <LandmarkThumb
              key={landmark.id}
              ref={(thumb: RefLandmarkThumb) => landmarkThumbsRef.current[key] = thumb}
              onPress={() => mapRef?.current?.changeLandmark(landmark.id)}
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
