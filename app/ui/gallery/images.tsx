import { FC, useState } from "react";
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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleClickImage = (index: number) => {
    onClick(index); // This function triggers the parent component to set the current index
  };

  return (
    <div className="images-container">
      {data.map((slide, index) => (
        <div
          className="image"
          key={slide.src} // Using slide.src as the key
          onClick={() => handleClickImage(index)}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="image-inner">
            <Image
              src={slide.src}
              alt={slide.description}
              width={slide.width}
              height={slide.height}
              className={hoveredIndex === index ? "zoomed" : ""}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Images;
