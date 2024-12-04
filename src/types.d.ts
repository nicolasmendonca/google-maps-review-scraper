export type Reviews = Array<Review>;

export interface Review {
  review_id: string;
  time: Time;
  author: Author;
  review: Review;
  images?: Image[];
  source: string;
}

export interface Time {
  published: number;
  last_edited: number;
}

export interface Author {
  name: string;
  profile_url: string;
  url: string;
  id: string;
}

export interface Review {
  rating: number;
  text?: string;
  language?: string;
}

export interface Image {
  id: string;
  url: string;
  size: Size;
  location: Location;
  caption: any;
}

export interface Size {
  width: number;
  height: number;
}

export interface Location {
  friendly: string;
  lat: number;
  long: number;
}
