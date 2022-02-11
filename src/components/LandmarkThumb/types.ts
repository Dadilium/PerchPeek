import { Landmark } from "../../constants";

export type LandmarkThumbProps = {
  onPress: () => void,
  onHeartPress: () => void,
  landmark: Landmark,
};

export interface RefLandmarkThumb {
  zoomIn: () => void,
  zoomOut: () => void,
};
