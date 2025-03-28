// AnimatedDiv.tsx
import { animated } from '@react-spring/web';
import React, { forwardRef, ReactNode, HTMLAttributes } from 'react';

// 🔧 타입스크립트 오류 없이 children 포함을 위해 any 사용
interface Props extends HTMLAttributes<HTMLDivElement> {
  style?: any;
  className?: string;
  children?: ReactNode;
}

const AnimatedDiv = forwardRef<HTMLDivElement, Props>(({ children, style, className, ...rest }, ref) => {
  return (
    <animated.div
      ref={ref}
      style={style}
      className={className}
      {...(rest as any)} // ✅ 핵심: children 타입 에러 방지용
    >
      {children}
    </animated.div>
  );
});

export default AnimatedDiv;
