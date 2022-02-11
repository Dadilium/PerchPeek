
import React from 'react';
import { View, Text, ImageBackground, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import HeartButton from '../../components/HeartButton';
import { useNavigation, useRoute } from '@react-navigation/native';
import { DetailsNavigationProp } from '../../AppNavigation';
import BackNavigationButton from '../../components/BackNavigationButton';
import { setLandmarkHeart } from '../../store/Landmarks';
import { RootState } from '../../store';
import styles from './styles';
import { DetailsProps } from './types';

const Details = (props: DetailsProps) => {
  const navigation = useNavigation<DetailsNavigationProp['navigation']>();
  const route = useRoute<DetailsNavigationProp['route']>();
  const dispatch = useDispatch();
  const { landmark } = route.params;
  const { container, topRightCorner, imageSize, detailContainer, titleLabel } = styles;
  const isLandmarkHearted = useSelector((state: RootState) => state.landmarks[landmark.id - 1].hearted)

  return (
    <ScrollView style={container}>
      <View>
        <ImageBackground source={{ uri: landmark.image }} style={imageSize}>
          <HeartButton
            onPress={() => dispatch(setLandmarkHeart({index: landmark.id - 1}))}
            customStyle={topRightCorner}
            isHearted={isLandmarkHearted || false}
            isLarge
          />
        </ImageBackground>
        <BackNavigationButton onPress={() => navigation.goBack()} />
      </View>
      <View style={detailContainer}>
        <Text style={titleLabel}>{landmark.name}</Text>
        <Text>{landmark.description}</Text>
      </View>
    </ScrollView>
  );
};

export default Details;