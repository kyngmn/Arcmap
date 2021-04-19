import { rgbToHex } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const Circle = (props) => {
  const {
    isRoot,
    children,
    padding,
    is_flex,
    __click,
    bg,
    bgimg,
    w,
    h,
    margin,
    align,
    zIndex,
    back_center,
    overflow,
    size,
    opacity,
    position,
    column,
    textAlign,
    color,
    top,
    right,
    left,
    borderRadius,
    randomColorFirst,
    randomColorSecond,
    randomColorThird,
  } = props;

  const styles = {
    padding: padding,
    is_flex: is_flex,
    bg: bg ? bg : false,
    bgimg: bgimg ? bgimg : false,
    w: w,
    h: h,
    margin: margin,
    align: align,
    zIndex: zIndex,
    back_center: back_center,
    overflow: overflow,
    size: size,
    opacity: opacity,
    position: position,
    column: column,
    textAlign: textAlign,
    color: color,
    top: top,
    right: right,
    left: left,
    borderRadius: borderRadius,
    randomColorFirst: Math.round(Math.random() * 255),
    randomColorSecond: Math.round(Math.random() * 255),
    randomColorThird: Math.round(Math.random() * 255),
  };

  return <CircleXY {...styles}>{children}</CircleXY>;
};

Circle.defaultProps = {
  isRoot: false,
  children: null,
  is_flex: false,
  __click: null,
  bg:
    "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
  bgimg: false,
  w: "5rem",
  h: "5rem",
  margin: false,
  align: false,
  zIndex: false,
  back_center: false,
  opacity: null,
  position: false,
  // 아래 추가
  textAlign: false,
  top: false,
  right: false,
  left: false,
  borderRadius: false,
  color: "#5A5656",
};

const CircleXY = styled.div`
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.bg};
  background-image: ${(props) => `url(${props.bgimg})`};
  background-size: ${(props) => props.size};
  opacity: ${(props) => (props.opacity ? props.opacity : "")};
  position: ${(props) => props.position};
  z-index: ${(props) => props.zIndex};
  ${(props) => (props.back_center ? `background-position: center;` : "")}
  ${(props) =>
    props.is_flex
      ? `display:flex; align-items: center; justify-content:flex-start; `
      : ""};
  ${(props) =>
    props.column ? `flex-direction: column;` : `flex-direction: row;`}
  text-align:${(props) => props.textAlign};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  left: ${(props) => props.left};
  border-radius: ${(props) => props.borderRadius};
  background-repeat: no-repeat;
  border-radius: 50rem;
  /* box-shadow: inset 0 0 5px #00000088; */
  border: ${(props) =>
    props.borderColor ? `0.5px solid ${props.borderColor}` : ""};
  margin: 0.1rem;
  background: #ffffff;
  transition: width 1s cubic-bezier(0.175, 0.885, 0.32, 1.275),
    padding 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275),
    z-index 1s cubic-bezier(0.175, 0.885, 0.32, 1.275),
    display 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  div {
    display: none;
  }
  :hover {
    transition-delay: 35ms;
    /* transform: scale(0.6); */
    width: 120%;
    background-color: ${(props) =>
      `rgb(${props.randomColorFirst},${props.randomColorSecond},${props.randomColorThird})`};
    padding: 10%;
    box-sizing: border-box;
    z-index: 100;
    cursor: pointer;
    div {
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      justify-content: space-evenly;
      color: white;
      font-size: 5rem;
    }
  }
`;

export default Circle;
