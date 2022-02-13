import { StackScreenProps } from '@react-navigation/stack';

export type Landmark = {
  id: number;
  name: string;
  latlng: {
    latitude: number;
    longitude: number;
  };
  description: string;
  image: string;
  hearted?: boolean;
};

export type RootStackParamList = {
  MapDisplay: undefined;
  Details: { landmark: Landmark };
};

export type HomeScreenNavigationProp = StackScreenProps<
  RootStackParamList,
  'MapDisplay'
>;
export type DetailsNavigationProp = StackScreenProps<
  RootStackParamList,
  'Details'
>;
