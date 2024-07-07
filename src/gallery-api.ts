import axios from "axios";
import { UnsplashResponse } from "./components/type";

axios.defaults.baseURL = "https://api.unsplash.com";

export const getGallery = async (
  query: string,
  currentPage: number
): Promise<UnsplashResponse> => {
  const params = {
    client_id:
      "fZ_zrhTQ1bwT0o3zUfC0ni-94UsC_dnbA1zhnvTbBOE",
    query: query,
    page: currentPage,
    per_page: 12,
  };
  const response = await axios.get<UnsplashResponse>(
    "/search/photos",
    {
      params,
    }
  );
  return response.data;
};
