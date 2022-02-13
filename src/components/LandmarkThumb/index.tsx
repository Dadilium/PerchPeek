import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, LayoutChangeEvent } from 'react-native';
import HeartButton from '../HeartButton';
import { SharedElement } from 'react-navigation-shared-element';
import styles from './styles';
import { LandmarkThumbProps } from './types';

const LandmarkThumb = (props: LandmarkThumbProps) => {
  const { container, imageSize, label, rounded, topRightCorner } = styles;
  const { onPress, onHeartPress, onLayout, landmark } = props;

  return (
    <SharedElement id={`item.${landmark.id}`}>
      <TouchableOpacity
        onPress={onPress}
        testID={`landmark-item-${landmark.id}`}
      >
        <View
          style={container}
          onLayout={(event: LayoutChangeEvent) => {
            onLayout(event.nativeEvent.layout.x);
          }}
        >
          <ImageBackground
            testID={`landmark-item-image-${landmark.id}`}
            source={{ uri: landmark.image }}
            style={imageSize}
            imageStyle={rounded}
          >
            <HeartButton
              onPress={onHeartPress}
              customStyle={topRightCorner}
              isHearted={landmark.hearted || false}
              testID={`heartbutton-${landmark.id}`}
            />
            <Text
              style={label}
              testID={`landmark-item-label-${landmark.id}`}
            >
              {landmark.name}
            </Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    </SharedElement>
  );
};

export default LandmarkThumb;