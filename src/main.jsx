import React from "react";
import Box from "./components/box";
import Circle from "./components/circle";

const Main = (props) => {
  // const circleColorArr = [
  //   "pink",
  //   "red",
  //   "black",
  //   "gray",
  //   "green",
  //   "blue",
  //   "orange",
  // ];

  return (
    <>
      <Box bo="red" text="text1" />
      <Box bo="blue" text="text2" />
      <Box text="text3" />
      <Box bo="pink" text="text4" />
      <Circle bo="pink"></Circle>
      <Circle bo="red"></Circle>
      <Circle bo="black"></Circle>
      <Circle bo="gray"></Circle>
      <Circle></Circle>
      <Circle bo="blue"></Circle>
      <Circle bo="yellow"></Circle>
    </>
  );
};

export default Main;
