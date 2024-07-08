import { ThreeDots } from "react-loader-spinner";
import css from "./Loader.module.css";
import React from "react";

const Loader: React.FC = () => {
  return (
    <div className={css.loader}>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="blue"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
