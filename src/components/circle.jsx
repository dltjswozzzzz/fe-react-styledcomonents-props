import styled from "styled-components";

const CircleEach = styled.div`
  width: 60px;
  height: 60px;
  margin: 20px;
  border-radius: 100px;
  background-color: ${(props) => (props.boxColor ? props.boxColor : "green")};
  display: inline-block;
`;

const Circle = (props) => {
  return (
    <>
      <CircleEach boxColor={props.bo}></CircleEach>
    </>
  );
};

export default Circle;
