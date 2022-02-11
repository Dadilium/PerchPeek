import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
  landmarksContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    backgroundColor: 'white'
  },
  scrollView: {
    marginVertical: 16,
    flex: 1,
  },
});

export default styles;