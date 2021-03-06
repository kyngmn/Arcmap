import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const {
    isRoot,
    children,
    padding,
    is_flex,
    __click,
    bg,
    bgimg,
    width,
    height,
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
    borderColor,
  } = props;

  const styles = {
    padding: padding,
    is_flex: is_flex,
    bg: bg ? bg : false,
    bgimg: bgimg ? bgimg : false,
    width: width,
    height: height,
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
    borderColor: borderColor,
  };

  if (isRoot) {
    return <RootContainer>{children}</RootContainer>;
  }

  if (__click) {
    return (
      <GridBox
        onClick={() => {
          __click();
        }}
        {...styles}
      >
        {children}
      </GridBox>
    );
  }
  return <GridBox {...styles}>{children}</GridBox>;
};

Grid.defaultProps = {
  isRoot: false,
  children: null,
  is_flex: false,
  __click: null,
  bg: false,
  bgimg: false,
  width: "100%",
  height: null,
  margin: false,
  align: false,
  zIndex: false,
  back_center: false,
  opacity: null,
  position: false,
  // μλ μΆκ°
  textAlign: false,
  top: false,
  right: false,
  left: false,
  borderRadius: false,
  color: "#5A5656",
  borderColor: false,
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => (props.height ? props.height : "")};
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
      ? `display:flex; align-items: center; justify-content:space-evenly; `
      : ""};
  ${(props) =>
    props.column ? `flex-direction: column;` : `flex-direction: row;`}
  text-align:${(props) => props.textAlign};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  left: ${(props) => props.left};
  border-radius: ${(props) => props.borderRadius};
  background-repeat: no-repeat;
  border: ${(props) =>
    props.borderColor ? `0.5px solid ${props.borderColor}` : ""};
  .svg {
    cursor: pointer;
  }
`;

// App.js μ Grid isRoot
const RootContainer = styled.div`
  background: black;
  z-index: 0;
  color: #5a5656;
  // κ°λ‘ νλ©΄ μλ μ€ λλ
  display: flex;
  flex-wrap: wrap;
  // μ»΄ν¬λνΈ μ¬μ΄ κ±°λ¦¬ λμΌ
  justify-content: space-evenly;
  // padding μ¬λ°± μ£ΌκΈ° => padding-topμ κ³ μ κ°μΌλ‘ λ°μν X
  overflow: hidden;
  -ms-overflow-style: hidden;
`;

export default Grid;
