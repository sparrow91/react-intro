// @flow

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 32%;
    border: 2px solid #333;
    border-radius: 4px;
    margin-bottom: 25px;
    padding-right: 10px;
    overflow: hidden;
`;
const Image = styled.img`
    float: left;
    margin-left: 10px;
    width: 46%;
`;

const ShowCard = props => {
  const { show } = props;
  return (
    <Wrapper>
      <Image alt={`${show.title} Show Poster`} src={`/public/img/posters/${show.poster}`} />
      <div>
        <h3>{show.title}</h3>
        <h4>({show.year})</h4>
        <p>{show.description}</p>
      </div>
    </Wrapper>
  );
};

export default ShowCard;
