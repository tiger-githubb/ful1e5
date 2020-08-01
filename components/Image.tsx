import React from "react";
import ReadmeImg from "./ReadmeImg";

export interface Props {
  width: number;
  height: number;
  src: string;
  imageId: string;
}
export const Image: React.FC<Props> = ({ width, height, src, imageId }) => {
  return (
    // 128 28
    <ReadmeImg width={width} height={height}>
      <div>
        <img id={imageId} src={src} />
      </div>
    </ReadmeImg>
  );
};
