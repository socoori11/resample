import { animated, AnimatedProps } from '@react-spring/web';
import React from 'react';
import './ImageSlider.css';

// HTML 이미지 태그에 애니메이션 props를 확장
type AnimatedImgProps = AnimatedProps<React.ImgHTMLAttributes<HTMLImageElement>>;

const AnimatedImg = (props: AnimatedImgProps) => {
  return <animated.img {...props} />;
};

export default AnimatedImg;
