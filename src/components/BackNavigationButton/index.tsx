import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import { BackNavigationButtonProps } from './types';

const BackNavigationButton = (props: BackNavigationButtonProps) => {
  const { container } = styles;
  const { onPress } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={container}>
        <Icon name={'chevron-down'} size={50} color={'blue'} />
      </View>
    </TouchableOpacity>
  );
};

export default BackNavigationButton;
