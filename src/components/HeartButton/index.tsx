import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import { HeartButtonProps } from './types';

const HeartButton = (props: HeartButtonProps) => {
  const { container, large, small } = styles;
  const { onPress, isLarge, customStyle, isHearted } = props;
  const iconSize = isLarge ? 30 : 18;
  const iconName = isHearted ? 'heart' : 'heart-outline';

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[container, customStyle, isLarge ? large : small]}>
        <Icon name={iconName} size={iconSize} color={'red'} />
      </View>
    </TouchableOpacity>
  );
};

export default HeartButton;