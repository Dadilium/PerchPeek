import { Landmark } from '../../types';

export type LandmarkThumbProps = {
  onPress: () => void;
  onHeartPress: () => void;
  onLayout: (x: number) => void;
  landmark: Landmark;
};
