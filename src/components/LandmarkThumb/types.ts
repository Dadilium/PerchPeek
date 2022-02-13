import { Landmark } from '../../constants';

export type LandmarkThumbProps = {
  onPress: () => void;
  onHeartPress: () => void;
  onLayout: (x: number) => void;
  landmark: Landmark;
};
