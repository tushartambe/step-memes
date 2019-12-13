import React from 'react';
import styled from 'styled-components';
import Card from "./Card"

const GalleryContainer = styled.div`
  display: flex;
  justify-content: center
  width: 960px;
  flex-wrap:wrap;
  margin: 0 auto

  & > * {
    margin-bottom: 30px;
  }

  &:last-child {
    margin-bottom: 0px;
  }
`;

const Gallery = props => {
    let rows = props.images.map((image, index) => (
        <Card image={image} key={index} />
    ));
    return <GalleryContainer>{rows}</GalleryContainer>;
};

export default Gallery;