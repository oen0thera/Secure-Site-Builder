import { ImageProps, ImageSize } from "@/types/components/Image.type";

export default function Image({ size, src }: ImageProps) {
  return (
    <div>
      <img
        src={`/images/${src}`}
        width={`${size === ImageSize.SMALL ? "30px" : "100px"}`}
        alt=""
      />
    </div>
  );
}
