import { useEffect, useState } from 'react';
import { useTransition, useSpring } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import AnimatedImg from '../com/AnimatedImg';
import AnimatedDiv from '../com/AnimatedDiv';
import './About.css';

const images = [
  '/image/image1.jpg',
  '/image/image2.jpg',
  '/image/image3.jpg',
];

const About = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => i + 1 === images.length ? 0 : i + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const transitions = useTransition(images[index], {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000 },
  });

  // 👇 스크롤 트리거용
  const { ref:ref1, inView:inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref:ref2, inView:inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const fadeInStyle1 = useSpring({
    opacity: inView1 ? 1 : 0,
    transform: inView1 ? 'translateY(0)' : 'translateY(50px)',
    config: { tension: 50, friction: 20 },
  });
  const fadeInStyle2 = useSpring({
    opacity: inView2 ? 1 : 0,
    transform: inView2 ? 'translateY(0)' : 'translateY(50px)',
    config: { tension: 70, friction: 20 },
  });

  return (
    <div className="about-container">
      <h1 className="about-title">About Page</h1>

      <div className="image-slide-wrapper">
        {transitions((style, item) => (
          <AnimatedImg
            key={item}
            src={item}
            alt="슬라이드 이미지"
            style={style}
            className="slide-image"
          />
        ))}
      </div>
        <br/>
        <br/>
        <br/>
      {/* 👇 스크롤 시 등장하는 섹션 */}
      <AnimatedDiv ref={ref1} style={fadeInStyle1} className="about-text">
        <h2>우리 서비스에 대해</h2>
        <p>
          이 웹사이트는 최신 프론트엔드 기술을 기반으로 구축되었으며,
          사용자 경험을 최우선으로 고려하고 있습니다.
          반응형 디자인, 애니메이션 효과, 직관적인 UI로 구성되어 있어
          누구나 편리하게 사용할 수 있어요.
          이 웹사이트는 최신 프론트엔드 기술을 기반으로 구축되었으며,
          사용자 경험을 최우선으로 고려하고 있습니다.
          반응형 디자인, 애니메이션 효과, 직관적인 UI로 구성되어 있어
          누구나 편리하게 사용할 수 있어요.
          이 웹사이트는 최신 프론트엔드 기술을 기반으로 구축되었으며,
          사용자 경험을 최우선으로 고려하고 있습니다.
          반응형 디자인, 애니메이션 효과, 직관적인 UI로 구성되어 있어
          누구나 편리하게 사용할 수 있어요.
          이 웹사이트는 최신 프론트엔드 기술을 기반으로 구축되었으며,
          사용자 경험을 최우선으로 고려하고 있습니다.
          반응형 디자인, 애니메이션 효과, 직관적인 UI로 구성되어 있어
          누구나 편리하게 사용할 수 있어요.
        </p>
      </AnimatedDiv>
 <br/>
        <br/>
        <br/>
     <AnimatedDiv ref={ref2} style={fadeInStyle2} className="about-text">
        <h2>우리 서비스에 대해</h2>
        <p>
          이 웹사이트는 최신 프론트엔드 기술을 기반으로 구축되었으며,
          사용자 경험을 최우선으로 고려하고 있습니다.
          반응형 디자인, 애니메이션 효과, 직관적인 UI로 구성되어 있어
          누구나 편리하게 사용할 수 있어요.
        </p>
      </AnimatedDiv>
    </div>
  );
};

export default About;
