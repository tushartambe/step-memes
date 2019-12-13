import React from 'react';
import styled from 'styled-components';


const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
//   border-bottom: 1px solid lightgray;
  padding-bottom: 10px;
  padding-top: 10px;
  padding: 10px;
`;

const ImageContainer = styled.div`
  height: 240px;
  width: 290px;
  margin: 0 auto;
  overflow:hidden;
`;

const Image = styled.img`
height: 240px;
width: 100%;
`;


const Footer = styled.div`
//   border-top: 1px solid lightgray;
  font-size: 14px;
  font-weight: 300;
  padding: 10px;
  overflow: hidden;
`;

const CardContainer = styled.div`
  width: 300px;
  margin-right:10px;
  border-radius:1%;
  border: 1px solid gray;
//   box-shadow: 0px 5px 18px -5px rgba(0,0,0,0.88);
  &:last-child {
    margin-right: 0px;
  }
`;

const Card = props => {
    return (
        <CardContainer>
            <Header>
                {/* {props.image.user} */}
            </Header>
            <ImageContainer>
                <a href={props.image.imageUrl}>
                    <Image src={props.image.imageUrl} />
                </a>
            </ImageContainer>
            <Footer>
                {/* {props.image.tags}  */}
            </Footer>
        </CardContainer>
    );
}

export default Card;
