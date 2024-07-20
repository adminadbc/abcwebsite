import { FC } from "react";
import Image from "next/image";

interface ImageData {
  src: string;
  title: string;
  description: string;
  width: number;
  height: number;
}

interface ImagesProps {
  data: ImageData[];
  onClick: (index: number) => void;
}

const Images: FC<ImagesProps> = (props) => {
  const { data, onClick } = props;

  const handleClickImage = (index: number) => {
    onClick(index); // This function triggers the parent component to set the current index
  };

  return (
    <div className="images-container">
      {data.map((slide, index) => (
        <button
          onClick={() => handleClickImage(index)}
          key={slide.src}
          className="image"
          title="button"
        >
          <Image
            src={slide.src}
            alt={slide.description}
            width={slide.width}
            height={slide.height}
          />
        </button>
      ))}
    </div>
  );
};

export default Images;
