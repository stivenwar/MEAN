export class Movie {
  _id: string;
  title: string;
  year: number;
  rated: string;
  runtime: number;
  countries: [string];
  genres: string;
  director: string;
  writers: string;
  actors: string;
  plot: string;
  poster: string;

  imdb: {
    id: string;
    rating: number;
    votes: number;
  };
  tomato: {
    meter: number;
    image: string;
    rating: number;
    reviews: number;
    fresh: number;
    consensus: string;
    userMeter: number;

    userRating: number;
    userReviews: number;
  };
  metacritic: number;
  awards: {
    wins: number;
    nominations: number;
    text: string
  };
  type: string

}


