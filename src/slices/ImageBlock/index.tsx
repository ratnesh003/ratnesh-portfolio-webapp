import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ImageBlock`.
 */
export type ImageBlockProps = SliceComponentProps<Content.ImageBlockSlice>;

/**
 * Component for "ImageBlock" Slices.
 */
const ImageBlock = ({ slice }: ImageBlockProps): JSX.Element => {
  return (
    <PrismicNextImage field={slice.primary.image} priority={false} quality={60} className="w-2/3"/>
  );
};

export default ImageBlock;
