import { Landmark } from '../../constants';

export type CustomMarkerProps = {
  landmark: Landmark;
  isSelected: boolean;
  testID: string;
  onPress: () => void;
};
