export type Landmark = {
  id: number,
  name: string,
  latlng: {
    latitude: number,
    longitude: number,
  },
  description: string,
  image: string,
};

export const startingLocation = {
  latitude: 51.500782626551675,
  longitude: -0.10652662330828043,
  latitudeDelta: 0.1,
  longitudeDelta: 0.1,
};

export const imageRatio = 0.8;