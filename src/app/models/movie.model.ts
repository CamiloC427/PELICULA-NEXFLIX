export interface Comment {
  user: string;
  text: string;
  timestamp: Date;
}

export interface Movie {
  id: number;
  title: string;
  genre: string;
  releaseDate: string;
  actors: string[];
  synopsis: string;
  review: string;
  image: string;
  thumbnail: string;
  comments?: Comment[];
}
