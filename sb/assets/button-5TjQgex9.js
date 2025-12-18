import{C as r,H as e}from"./styled-components.browser.esm-C92GuyYj.js";const a=e.button`
  border: 2px solid #47b475;
  background-color: #fff;
  padding: 0 26px;
  height: 40px;
  min-width: 150px;
  line-height: 36px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 0;
  color: #286243;
  text-align: center;
  transition: all 0.3s ease;
  margin-right: 8px;
  margin-bottom: 24px;
  cursor: pointer;

  &:hover {
    background-color: #47b475;
    color: #fff;
  }

  ${o=>o.dark&&r`
    border-color: #949494;
    color: #949494;

    &:hover {
      background-color: #949494;
      color: #fff;
    }
  `}

  ${o=>o.light&&r`
    border-color: #ddd;
    color: #ddd;
  `}

  ${o=>o.opaque&&r`
    background: none;

    &:hover {
      border-color: #fff;
      background-color: transparent;
      color: #fff;
    }
  `}

  ${o=>o.small&&r`
    min-width: 0;
    height: 30px;
    font-size: 11px;
    line-height: 27px;
  `}

  ${o=>o.extremeSmall&&r`
    min-width: 0;
    height: 20px;
    padding: 0 10px;
    font-size: 10px;
    line-height: 18px;
  `}

  ${o=>o.wave&&r`
    position: relative;
    overflow: hidden;

    &::before {
      position: absolute;
      top: -100%; /* 動きの範囲をさらに広げる */
      left: -100%;
      width: 600%; /* 動きの範囲をさらに広げる */
      height: 400%;
      animation: waveAnimation 8s linear infinite; /* アニメーションの速度を遅くする */
      background-image: radial-gradient(circle at 50% 50%, #47b475 10%, #34a3a3 20%, #285e5e 30%, transparent 31%, transparent); /* 色の変化をさらに加える */
      background-position: 0 0;
      background-repeat: no-repeat;
      background-size: 50% 100%;
      content: '';
    }

    @keyframes waveAnimation {
      0% {
        transform: rotate(0deg);
      }

      50% {
        transform: scale(1.2) rotate(180deg); /* 中間点で拡大しながら回転 */
      }

      100% {
        transform: rotate(360deg);
      }
    }
  `}
`;export{a as B};
