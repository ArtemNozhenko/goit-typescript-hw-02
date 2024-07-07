export interface Images {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
}

export interface UnsplashResponse {
  total: number;
  results: Images[];
}
