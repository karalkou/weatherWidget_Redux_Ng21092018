export interface SocialInfo {
  title: string;
  img: string;
  followers: number;
  following: number;
}

export interface Weather {
  title: string;
  icon: string;
  water: number;
  temperature: number;
}

export interface WidgetModel {
  type: string;
  img: string;
  name: string;
  address: string;
  phone: string;
  _id: string;

  weather: Weather;
  social_info: SocialInfo;
}
