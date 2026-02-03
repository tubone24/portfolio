import React from "react";
import styled, { keyframes } from "styled-components";

// 肉球が出現するアニメーション（回転を含む）
const createPawAppear = (rotation: number) => keyframes`
  0% {
    opacity: 0;
    transform: rotate(${rotation}deg) scale(0.3);
  }
  50% {
    opacity: 1;
    transform: rotate(${rotation}deg) scale(1.15);
  }
  100% {
    opacity: 1;
    transform: rotate(${rotation}deg) scale(1);
  }
`;

// 肉球がフェードアウトするアニメーション
const createPawFade = (rotation: number) => keyframes`
  0% {
    opacity: 1;
    transform: rotate(${rotation}deg) scale(1);
  }
  100% {
    opacity: 0.25;
    transform: rotate(${rotation}deg) scale(1);
  }
`;

const LoaderWrapper = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  overflow: hidden;
`;

// 肉球のラッパー（位置決め用）
const PawWrapper = styled.div`
  position: absolute;
`;

// 肉球の画像コンポーネント
const PawPrintImg = styled.img<{ $delay: number; $rotation: number }>`
  width: 50px;
  height: 50px;
  opacity: 0;
  animation: ${(props) => createPawAppear(props.$rotation)} 0.35s ease-out
      forwards,
    ${(props) => createPawFade(props.$rotation)} 0.6s ease-in 1.8s forwards;
  animation-delay: ${(props) => props.$delay}s,
    ${(props) => props.$delay + 1.5}s;

  @media (width <= 768px) {
    width: 36px;
    height: 36px;
  }
`;

// 肉球の配置を計算（左下から右上へ）
const getPawPositions = () => {
  const positions = [];
  const count = 8;

  for (let i = 0; i < count; i++) {
    const progress = i / (count - 1);
    // 左下から右上へ斜めに配置
    const baseX = 5 + progress * 80;
    const baseY = 85 - progress * 75;

    // 右足・左足を交互に
    const isRightFoot = i % 2 === 0;

    // 歩幅のオフセット（進行方向に対して左右にずらす）
    const offsetX = isRightFoot ? 4 : -4;
    const offsetY = isRightFoot ? -3 : 3;

    // 進行方向は左下→右上（45度方向に進む）
    // 肉球は進行方向を向くように配置
    // 右足: 進行方向から少し外向き
    // 左足: 進行方向から少し内向き
    const rotation = isRightFoot ? 60 : 30;

    positions.push({
      x: baseX + offsetX,
      y: baseY + offsetY,
      isRightFoot,
      rotation,
      delay: i * 0.3,
    });
  }

  return positions;
};

type ShibaLoaderProps = {
  show: boolean;
};

export const ShibaLoader: React.FC<ShibaLoaderProps> = ({ show }) => {
  const pawPositions = React.useMemo(() => getPawPositions(), []);

  React.useEffect(() => {
    console.log("ShibaLoader - show:", show);
  }, [show]);

  if (!show) return null;

  return (
    <LoaderWrapper>
      {pawPositions.map((pos, index) => (
        <PawWrapper
          key={index}
          style={{
            left: `${pos.x}%`,
            top: `${pos.y}%`,
          }}
        >
          <PawPrintImg
            src="/paw-print.png"
            alt="paw print"
            $delay={pos.delay}
            $rotation={pos.rotation}
          />
        </PawWrapper>
      ))}
    </LoaderWrapper>
  );
};

export default ShibaLoader;
