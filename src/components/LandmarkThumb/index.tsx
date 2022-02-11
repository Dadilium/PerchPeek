import React, { useRef, useState, useImperativeHandle, forwardRef, Ref } from 'react';
import { Animated, View, Text, TouchableOpacity, ImageBackground, Dimensions, LayoutChangeEvent } from 'react-native';
import HeartButton from '../HeartButton';
import { imageRatio } from '../../constants';
import styles from './styles';
import { LandmarkThumbProps, RefLandmarkThumb } from './types';
import { SharedElement } from 'react-navigation-shared-element';

const LandmarkThumb = forwardRef((props: LandmarkThumbProps, ref: Ref<RefLandmarkThumb>) => {
  const { container, imageSize, label, rounded, topRightCorner } = styles;
  const { onPress, onHeartPress, landmark } = props;
  const [animating, setAnimating] = useState(false);
  const [viewPos, setViewPos] = useState<null | { x: number, y: number }>(null)
  const widthAnim = useRef(new Animated.Value(container.width)).current;
  const heightAnim = useRef(new Animated.Value(container.height)).current;
  // const posAnim = useRef(new Animated.ValueXY({ x: viewPos?.x || 0, y: viewPos?.y || 0 })).current;
  const posAnim = useRef(new Animated.Value(0)).current;
  const aspectAnim = useRef(new Animated.Value(1)).current;
  const animationDuration = 1000;
  useImperativeHandle(ref, () => ({ zoomIn, zoomOut }));

  const zoomIn = () => {
    // setAnimating(true);
    // Animated.timing(widthAnim, {
    //   toValue: 10 * container.width,
    //   duration: animationDuration,
    //   useNativeDriver: false,
    // }).start();
    // Animated.timing(heightAnim, {
    //   toValue: 10 * container.height,
    //   duration: animationDuration,
    //   useNativeDriver: false,
    // }).start();
    // Animated.timing(aspectAnim, {
    //   toValue: 10,
    //   duration: animationDuration,
    //   useNativeDriver: false,
    // }).start();
    const { width, height } = Dimensions.get('screen');
    console.log(viewPos);
    Animated.timing(posAnim, {
      // toValue: { x: -50, y: -100 },
      toValue: 1,
      duration: animationDuration,
      useNativeDriver: true
    }).start();
  };

  const zoomOut = () => {
    Animated.timing(widthAnim, {
      toValue: container.width,
      duration: animationDuration,
      useNativeDriver: false,
    }).start();
    Animated.timing(heightAnim, {
      toValue: container.height,
      duration: animationDuration,
      useNativeDriver: false,
    }).start();
    Animated.timing(aspectAnim, {
      toValue: 1,
      duration: animationDuration,
      useNativeDriver: false,
    }).start();
  };

  const saveThumbTranslateY = posAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -300],
  });
  const saveScale = posAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 5],
  });

  return (
    <SharedElement id={`item.${landmark.id}`}>
      <TouchableOpacity onPress={onPress}>
        <View style={container}>
          <ImageBackground source={{ uri: landmark.image }} style={imageSize} imageStyle={rounded}>
            <HeartButton onPress={onHeartPress} customStyle={topRightCorner} isHearted={landmark.hearted || false} />
            <Text style={label}>{landmark.name}</Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    </SharedElement>
  );
});

export default LandmarkThumb;