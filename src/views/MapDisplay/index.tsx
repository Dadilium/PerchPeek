import React, { useRef, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { HomeScreenNavigationProp } from '../../AppNavigation';
import { RootState } from '../../store/index';
import LandmarkThumb from '../../components/LandmarkThumb';
import { setLandmarkHeart } from '../../store/Landmarks';
import { RefMap } from '../../components/Map/types';
import Map from '../../components/Map';
import { Landmark } from '../../constants';
import LandmarkThumbStyles from '../../components/LandmarkThumb/styles';
import styles from './styles';

const MapDisplay = ({ navigation }: HomeScreenNavigationProp) => {
  const { mapContainer, landmarksContainer, scrollView } = styles;
  const landmarks: Array<Landmark> = useSelector((state: RootState) => state.landmarks);
  const [dataSourceCords, setDataSourceCords] = useState<Array<number>>([]);
  const [scrollViewRef, setScrollViewRef] = useState<ScrollView | null>();
  const mapRef = useRef<RefMap>();
  const dispatch = useDispatch();

  const onMarkerPressed = (landmark: Landmark) => {
    const { container } = LandmarkThumbStyles;
    const ToX = (landmark.id - 1) * (container.width + container.marginHorizontal);

    scrollViewRef?.scrollTo({
      x: ToX, animated: true,
    });
    mapRef?.current?.changeLandmark(landmark.id);
  };

  return (
    <View style={mapContainer}>
      <Map
        ref={(map: RefMap) => mapRef.current = map}
        landmarks={landmarks}
        onSelection={(landmark) => onMarkerPressed(landmark)}
      />
      <View style={landmarksContainer}>
        <ScrollView
          testID="landmarks-list"
          ref={(ref) => setScrollViewRef(ref)}
          style={scrollView}
          horizontal
        >
          {landmarks.map((landmark, key) => (
            <LandmarkThumb
              key={landmark.id}
              onPress={() => navigation.navigate('Details', { landmark: landmark })}
              onHeartPress={() => dispatch(setLandmarkHeart({ index: key }))}
              onLayout={(x) => {
                dataSourceCords[key] = x;
                setDataSourceCords(dataSourceCords);
              }}
              landmark={landmark}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default MapDisplay;
