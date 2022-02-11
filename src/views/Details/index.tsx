
import React from 'react';
import { View, Text, ImageBackground, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import HeartButton from '../../components/HeartButton';
import { DetailsNavigationProp } from '../../AppNavigation';
import BackNavigationButton from '../../components/BackNavigationButton';
import { SharedElement } from 'react-navigation-shared-element';
import { setLandmarkHeart } from '../../store/Landmarks';
import { RootState } from '../../store';
import styles from './styles';

const Details = ({navigation, route}: DetailsNavigationProp) => {
  const { container, topRightCorner, imageSize, detailContainer, titleLabel } = styles;
  const dispatch = useDispatch();
  const { landmark } = route.params;
  const isLandmarkHearted = useSelector((state: RootState) => state.landmarks[landmark.id - 1].hearted);

  return (
    <ScrollView style={container}>
      <SharedElement id={`item.${landmark.id}`}>
        <View>
          <ImageBackground source={{ uri: landmark.image }} style={imageSize}>
            <HeartButton
              onPress={() => dispatch(setLandmarkHeart({ index: landmark.id - 1 }))}
              customStyle={topRightCorner}
              isHearted={isLandmarkHearted || false}
              isLarge
            />
          </ImageBackground>
          <BackNavigationButton onPress={() => navigation.goBack()} />
        </View>
      </SharedElement>
      <View style={detailContainer}>
        <Text style={titleLabel}>{landmark.name}</Text>
        <Text>{landmark.description}</Text>
      </View>
    </ScrollView>
  );
};

export default Details;