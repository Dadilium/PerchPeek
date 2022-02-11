import { Landmark } from '../../constants';

export type CustomMarkerProps = {
  landmark: Landmark,
  isSelected: boolean,
  onPress: () => void,
};
