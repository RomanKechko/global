import React, { FC } from "react";
import s from "../portfolio.module.css";
type Props = {
  Count: (count: number) => void;
  currentImage: number | null;
  totalImages: any;
};

const Controls: FC<Props> = ({ Count, totalImages, currentImage }) => {
  const buttons = Array.from({ length: totalImages }, (_, index) => index);

  const getButtonClassName = (index: number) => {
    return index === currentImage ? s.btn_active : s.btn;
  };

  return (
    <div id="sec-controls">
      {buttons.map((index) => (
        <>
          <button
            key={index}
            className={getButtonClassName(index)}
            onClick={() => Count(index)}
          ></button>
        </>
      ))}
    </div>
  );
};

export default Controls;
