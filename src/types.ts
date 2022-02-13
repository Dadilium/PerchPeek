import { NativeStackScreenProps } from '@react-navigation/native-stack';

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

export type HomeScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'MapDisplay'
>;
export type DetailsNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'Details'
>;
