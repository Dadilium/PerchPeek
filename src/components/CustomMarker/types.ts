import { Landmark } from '../../types';

export type CustomMarkerProps = {
  landmark: Landmark;
  isSelected: boolean;
  testID: string;
  onPress: () => void;
};
