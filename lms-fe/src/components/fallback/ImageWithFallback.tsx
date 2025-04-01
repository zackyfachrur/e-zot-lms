import { Suspense } from "react";
import { useImage } from "react-image";
import { ImageWithFallbackType, ImageComponentType } from "@type/ComponentType";

const ImageComponent: React.FC<ImageComponentType> = ({
  source,
  width,
  className,
}) => {
  const { src } = useImage({
    srcList: `${source}`,
  });
  return <img src={src} width={width} className={className} />;
};

const ImageWithFallbacks: React.FC<ImageWithFallbackType> = ({
  source,
  width,
  className,
}) => {
  return (
    <Suspense fallback={<div data-testid="loader" className="loader-strip"></div>}>
      <ImageComponent source={source} width={width} className={className} />
    </Suspense>
  );
};


export default ImageWithFallbacks;
