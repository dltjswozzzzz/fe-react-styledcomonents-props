import styled from "styled-components";

const CardEach = styled.div`
  width: 300px;
  height: 365px;
  margin: 50px;
  border-radius: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const CardImage = styled.img`
  width: 280px;
  height: 150px;
  margin: 10px 10px 0 10px;
  /* background-color: green; */
  border-radius: 20px;
`;

const CardTitle = styled.p`
  font-size: 30px;
  margin: 20px 0 10px 20px;
  font-weight: bold;
`;

const CardText = styled.p`
  font-size: 18px;
  color: grey;
  font-weight: 300;
  margin: 0 15px 15px 20px;
`;

const CardButton = styled.button`
  width: 280px;
  height: 50px;
  background: linear-gradient(to right, #6882db, #dcebff);
  border-radius: 20px;
  margin: 0 0 0 10px;
  border-width: 0px;
  cursor: pointer;
`;

const CardButtonText = styled.p`
  font-size: 15px;
  color: white;
`;

const Card = (props) => {
  return (
    <>
      <CardEach>
        <CardImage alt={props.img} src={props.img}></CardImage>
        <CardTitle>{props.title}</CardTitle>
        <CardText>{props.text}</CardText>
        <CardButton>
          <CardButtonText>{props.cardbuttontext}</CardButtonText>
        </CardButton>
      </CardEach>
    </>
  );
};

export default Card;
