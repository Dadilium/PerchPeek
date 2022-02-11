import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import { HeartButtonProps } from './types';

const HeartButton = (props: HeartButtonProps) => {
  const { container, large, small } = styles;
  const { onPress, isLarge, customStyle } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[container, customStyle, isLarge ? large : small]}>
        <Icon name={'heart-outline'} size={isLarge ? 30 : 18} color={'red'} />
      </View>
    </TouchableOpacity>
  );
};

export default HeartButton;