import styled, { css } from "styled-components";

export const Button = styled.button<{
  light?: boolean;
  dark?: boolean;
  opaque?: boolean;
  small?: boolean;
  extremeSmall?: boolean;
  center?: boolean;
  wave?: boolean;
}>`
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
    color: #fff;
    background-color: #47b475;
  }

  ${props => props.dark && css`
    color: #949494;
    border-color: #949494;
    &:hover {
      color: #fff;
      background-color: #949494;
    }
  `}

  ${props => props.light && css`
    color: #ddd;
    border-color: #ddd;
  `}

  ${props => props.opaque && css`
    background: none;
    &:hover {
      background-color: transparent;
      color: #fff;
      border-color: #fff;
    }
  `}

  ${props => props.small && css`
    height: 30px;
    font-size: 11px;
    line-height: 27px;
    min-width: 0;
  `}

  ${props => props.extremeSmall && css`
    height: 20px;
    font-size: 10px;
    line-height: 18px;
    padding: 0 10px;
    min-width: 0;
  `}

  ${props => props.wave && css`
    position: relative;
    overflow: hidden;
    &:before {
      content: '';
      position: absolute;
      top: -100%; /* 動きの範囲をさらに広げる */
      left: -100%;
      width: 600%; /* 動きの範囲をさらに広げる */
      height: 400%;
      background-repeat: no-repeat;
      background-position: 0 0;
      background-size: 50% 100%;
      background-image: radial-gradient(circle at 50% 50%, #47b475 10%, #34a3a3 20%, #285e5e 30%, transparent 31%, transparent); /* 色の変化をさらに加える */
      animation: waveAnimation 8s linear infinite; /* アニメーションの速度を遅くする */
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
`;

export default Button;
