import { useState, useEffect } from "react";
import { getGallery } from "../../gallery-api";
import { Toaster } from "react-hot-toast";
import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import css from "./App.module.css";
import { Images, UnsplashResponse } from "../type";

export default function App() {
  const [gallery, setGallery] = useState<Images[]>([]);
  const [isLoading, setIsLoading] =
    useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] =
    useState<string>("");
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [image, setImage] = useState<string>("");
  const [hasLoadMore, setHasLoadMore] =
    useState<boolean>(false);

  useEffect(() => {
    if (searchQuery === "") {
      return;
    }
    async function fetchGallery(): Promise<void> {
      try {
        setIsLoading(true);
        setIsError(false);
        const { results, total }: UnsplashResponse =
          await getGallery(searchQuery, page);
        setGallery((prevState) => [
          ...prevState,
          ...results,
        ]);
        setHasLoadMore(page < Math.ceil(total / 12));
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchGallery();
  }, [searchQuery, page]);

  const handleSearch = async (
    query: string
  ): Promise<void> => {
    setSearchQuery(query);
    setPage(1);
    setGallery([]);
  };

  const handLoadMore = (): void => {
    setPage(page + 1);
  };

  const openModal = (image: string): void => {
    setImage(image);
    setIsOpen(true);
  };

  const closeModal = (): void => {
    setImage("");
    setIsOpen(false);
  };

  return (
    <div className={css.container}>
      <Toaster />
      <SearchBar onSearch={handleSearch} />
      {isError && <ErrorMessage />}
      {gallery.length > 0 && (
        <ImageGallery
          items={gallery}
          onImageClick={openModal}
        />
      )}
      {isLoading && <Loader />}
      {hasLoadMore && !isLoading && (
        <LoadMoreBtn click={handLoadMore} />
      )}
      <ImageModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        urlImage={image}
      />
    </div>
  );
}
