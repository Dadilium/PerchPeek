import { Landmark } from '../../constants';

export type MapProps = {
  landmarks: Array<Landmark>;
  onSelection: (landmark: Landmark) => void;
};

export interface RefMap {
  changeLandmark: (landmarkId: number) => void;
}
