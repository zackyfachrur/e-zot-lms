import { Suspense } from "react";
import { useImage } from "react-image";
import { ImageWithFallbackType, ImageComponentType } from "@type/ComponentType";

const ImageComponent: React.FC<ImageComponentType> = ({ source, width }) => {
  const { src } = useImage({
    srcList: `${source}`,
  });
  return <img src={src} width={width} className="my-4" />;
};

const ImageWithFallbacks: React.FC<ImageWithFallbackType> = ({
  source,
  width,
}) => {
  return (
    <Suspense fallback={<div className="loader-strip"></div>}>
      <ImageComponent source={source} width={width} />
    </Suspense>
  );
};

export default ImageWithFallbacks;
