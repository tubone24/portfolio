import React, { useState, useEffect, useRef, useCallback } from "react";
import styled from "styled-components";

const CarouselContainer = styled.div`
  position: relative;
  overflow: visible;
  width: 100%;
  min-height: 400px;
  perspective: 1200px;
  perspective-origin: 50% 50%;
`;

const CarouselWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 400px;
`;

const CarouselTrack = styled.div<{ $dragging?: boolean; $isDragging?: boolean }>`
  position: relative;
  width: 100%;
  min-height: 400px;
  transform-style: preserve-3d;
  cursor: ${(props) =>
    props.$dragging
      ? props.$isDragging
        ? "grabbing"
        : "grab"
      : "default"};
`;

const CarouselSlide = styled.div<{ $index: number; $currentIndex: number; $totalSlides: number }>`
  width: 70%;
  position: absolute;
  left: 15%;
  top: 0;
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              filter 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  backface-visibility: hidden;
  pointer-events: ${(props) => (props.$index === props.$currentIndex ? "auto" : "none")};

  ${(props) => {
    const distance = props.$index - props.$currentIndex;
    const absDistance = Math.abs(distance);
    const translateXBase = distance * 100;

    if (absDistance === 0) {
      // 現在のスライド - 手前に表示
      return `
        transform: translateX(${translateXBase}%) translateZ(0px) scale(1);
        opacity: 1;
        filter: brightness(1);
        z-index: 10;
      `;
    } else if (absDistance === 1) {
      // 隣接するスライド - 後ろに少し見える
      return `
        transform: translateX(${translateXBase}%) translateZ(-200px) scale(0.8);
        opacity: 0.6;
        filter: brightness(0.7);
        z-index: 5;
      `;
    } else if (absDistance === 2) {
      // 2つ離れたスライド - さらに後ろに
      return `
        transform: translateX(${translateXBase}%) translateZ(-350px) scale(0.65);
        opacity: 0.4;
        filter: brightness(0.5);
        z-index: 2;
      `;
    } else {
      // それ以上離れたスライド - 最も後ろ
      return `
        transform: translateX(${translateXBase}%) translateZ(-450px) scale(0.5);
        opacity: 0.2;
        filter: brightness(0.3);
        z-index: 1;
      `;
    }
  }}
`;

const NavButton = styled.button<{ $direction: "prev" | "next" }>`
  position: absolute;
  top: 50%;
  ${(props) => (props.$direction === "prev" ? "left: 20px;" : "right: 20px;")}
  transform: translateY(-50%);
  background: rgb(255 255 255 / 80%);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  transition: background 0.3s ease;

  &:hover {
    background: rgb(255 255 255 / 100%);
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
  }
`;

type CustomCarouselProps = {
  children: React.ReactNode[];
  autoplay?: boolean;
  autoplayInterval?: number;
  wrapAround?: boolean;
  dragging?: boolean;
};

export const CustomCarousel: React.FC<CustomCarouselProps> = ({
  children,
  autoplay = false,
  autoplayInterval = 3000,
  wrapAround = false,
  dragging = false,
}) => {
  const [currentIndex, setCurrentIndex] = useState(wrapAround ? 1 : 0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // wrapAround用に先頭と末尾に複製スライドを追加
  const slides = wrapAround
    ? [children[children.length - 1], ...children, children[0]]
    : children;

  const totalSlides = slides.length;

  const goToSlide = useCallback(
    (index: number, withTransition = true) => {
      setIsTransitioning(withTransition);
      setCurrentIndex(index);
    },
    []
  );

  const goToNext = useCallback(() => {
    if (!isTransitioning) {
      goToSlide(currentIndex + 1);
    }
  }, [currentIndex, isTransitioning, goToSlide]);

  const goToPrev = useCallback(() => {
    if (!isTransitioning) {
      goToSlide(currentIndex - 1);
    }
  }, [currentIndex, isTransitioning, goToSlide]);

  // トランジション完了時の処理
  useEffect(() => {
    const handleTransitionEnd = () => {
      if (wrapAround) {
        // wrapAround時のインデックス調整
        if (currentIndex === 0) {
          setIsTransitioning(false);
          setCurrentIndex(children.length);
        } else if (currentIndex === children.length + 1) {
          setIsTransitioning(false);
          setCurrentIndex(1);
        } else {
          setIsTransitioning(false);
        }
      } else {
        setIsTransitioning(false);
      }
    };

    const track = trackRef.current;
    if (track) {
      track.addEventListener("transitionend", handleTransitionEnd);
      return () => track.removeEventListener("transitionend", handleTransitionEnd);
    }
  }, [currentIndex, children.length, wrapAround]);

  // 自動再生
  useEffect(() => {
    if (!autoplay) return;

    const startAutoplay = () => {
      autoplayTimerRef.current = setInterval(() => {
        goToNext();
      }, autoplayInterval);
    };

    const stopAutoplay = () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
        autoplayTimerRef.current = null;
      }
    };

    startAutoplay();

    return () => stopAutoplay();
  }, [autoplay, autoplayInterval, goToNext]);

  // ドラッグ操作
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (!dragging) return;
    setIsDragging(true);
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    setDragStart(clientX);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const offset = clientX - dragStart;
    setDragOffset(offset);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 50; // 50px以上ドラッグしたらスライド移動
    if (dragOffset > threshold) {
      goToPrev();
    } else if (dragOffset < -threshold) {
      goToNext();
    }
    setDragOffset(0);
  };

  return (
    <CarouselContainer>
      <CarouselWrapper>
        <CarouselTrack
          ref={trackRef}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
          $dragging={dragging}
          $isDragging={isDragging}
        >
          {slides.map((slide, index) => (
            <CarouselSlide
              key={index}
              $index={index}
              $currentIndex={currentIndex}
              $totalSlides={totalSlides}
            >
              {slide}
            </CarouselSlide>
          ))}
        </CarouselTrack>

        {!isDragging && (
          <>
            <NavButton $direction="prev" onClick={goToPrev} aria-label="Previous slide">
              ‹
            </NavButton>
            <NavButton $direction="next" onClick={goToNext} aria-label="Next slide">
              ›
            </NavButton>
          </>
        )}
      </CarouselWrapper>
    </CarouselContainer>
  );
};
