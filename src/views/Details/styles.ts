import { StyleSheet, Dimensions } from 'react-native';
import { imageRatio } from '../../constants';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  topRightCorner: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  imageSize: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').width * imageRatio,
  },
  detailContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  titleLabel: {
    fontSize: 35,
    fontWeight: 'bold',
    marginVertical: 32,
  },
});

export default styles;