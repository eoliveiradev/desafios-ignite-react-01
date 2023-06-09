export interface ContextProps {
  children: ReactNode;
}

interface ICity {
  name: string;
  image_url: string;
  country: {
    name: string;
    flag_url: string;
  }
}

export interface IContinent {
  id: number;
  name: string;
  image: string;
  description: string;
  short_description: string;
  countries: {
    total: number
  };
  cities: {
    total: number;
    data: ICity[];
  };
  languages: {
    total: number;
  }
}