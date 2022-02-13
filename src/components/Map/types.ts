import { Landmark } from '../../types';

export type MapProps = {
  landmarks: Array<Landmark>;
  onSelection: (landmark: Landmark) => void;
};

export interface RefMap {
  changeLandmark: (landmarkId: number) => void;
}
