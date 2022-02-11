import React, { useRef, useState, useImperativeHandle, forwardRef, Ref } from 'react';
import { Animated, View, Text, TouchableOpacity, ImageBackground, Dimensions, LayoutChangeEvent } from 'react-native';
import HeartButton from '../HeartButton';
import { imageRatio } from '../../constants';
import styles from './styles';
import { LandmarkThumbProps, RefLandmarkThumb } from './types';

const LandmarkThumb = forwardRef((props: LandmarkThumbProps, ref: Ref<RefLandmarkThumb>) => {
  const { container, imageSize, label, rounded, topRightCorner } = styles;
  const { onPress, onHeartPress, landmark } = props;
  const [viewPos, setViewPos] = useState<null | { x: number, y: number }>(null)
  // const posAnim = useRef(new Animated.ValueXY()).current;
  const widthAnim = useRef(new Animated.Value(container.width)).current;
  const heightAnim = useRef(new Animated.Value(container.height)).current;
  // const scaleAnim = useRef(new Animated.Value(1)).current;

  useImperativeHandle(ref, () => ({ zoomIn, zoomOut }));

  const zoomIn = () => {
    Animated.timing(widthAnim, {
      toValue: 10 * container.width,
      duration: 1000,
      useNativeDriver: false,
    }).start();
    Animated.timing(heightAnim, {
      toValue: 10 * container.height,
      duration: 1000,
      useNativeDriver: false,
    }).start();
    // Animated.timing(posAnim, {
    //   toValue: { x: 0, y: 0 },
    //   duration: 500,
    //   useNativeDriver: false,
    // }).start();
    // Animated.timing(widthAnim, {
    //   toValue: Dimensions.get('screen').width,
    //   duration: 500,
    //   useNativeDriver: false,
    // }).start();
    // Animated.timing(heightAnim, {
    //   toValue: Dimensions.get('screen').width * imageRatio,
    //   duration: 500,
    //   useNativeDriver: false,
    // }).start();
  };

  const zoomOut = () => {
    Animated.timing(widthAnim, {
      toValue: container.width,
      duration: 1000,
      useNativeDriver: false,
    }).start();
    Animated.timing(heightAnim, {
      toValue: container.height,
      duration: 1000,
      useNativeDriver: false,
    }).start();
    // Animated.timing(posAnim, {
    //   toValue: { x: viewPos?.x || 0, y: viewPos?.y || 0 },
    //   duration: 500,
    //   useNativeDriver: false,
    // }).start();
    // Animated.timing(widthAnim, {
    //   toValue: imageSize.width,
    //   duration: 500,
    //   useNativeDriver: false,
    // }).start();
    // Animated.timing(heightAnim, {
    //   toValue: imageSize.height,
    //   duration: 500,
    //   useNativeDriver: false,
    // }).start();
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Animated.View
        onLayout={(e: LayoutChangeEvent) => {
          const { x, y } = e.nativeEvent.layout
          if (viewPos === null) setViewPos({ x: x, y: y });
        }}
        style={[
          container,
          // { aspectRatio: scaleAnim }
          // posAnim.getLayout(),
          { width: widthAnim, height: heightAnim }
        ]}>
        <ImageBackground source={{ uri: landmark.image }} style={imageSize} imageStyle={rounded}>
          <HeartButton onPress={onHeartPress} customStyle={topRightCorner} isHearted={landmark.hearted || false}/>
          <Text style={label}>{landmark.name}</Text>
        </ImageBackground>
      </Animated.View>
    </TouchableOpacity>
  );
});

export default LandmarkThumb;