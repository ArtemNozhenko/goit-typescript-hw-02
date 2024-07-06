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

export default function App() {
  const [gallery, setGallery] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState("");
  const [hasLoadMore, setHasLoadMore] = useState(false);

  useEffect(() => {
    if (searchQuery === "") {
      return;
    }
    async function fetchGallery() {
      try {
        setIsLoading(true);
        setIsError(false);
        const { results, total } = await getGallery(
          searchQuery,
          page
        );
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

  const handleSearch = async (query) => {
    setSearchQuery(query);
    setPage(1);
    setGallery([]);
  };

  const handLoadMore = () => {
    setPage(page + 1);
  };

  const openModal = (image) => {
    setImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
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
