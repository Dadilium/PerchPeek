import { StyleSheet } from 'react-native';
import { imageRatio } from '../../constants';

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200 * imageRatio,
    marginHorizontal: 8,
    radius: 10,
    borderRadius: 3,
  },
  imageSize: {
    flex: imageRatio,
    // width: 200,
    // height: 200 * imageRatio,
  },
  label: {
    position: 'absolute',
    left: 10,
    bottom: 8,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  rounded: {
    borderRadius: 8,
  },
  topRightCorner: {
    position: 'absolute',
    right: 10,
    top: 8,
  },
});

export default styles;