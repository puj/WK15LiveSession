import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.li`
  align-self: flex-start;
  padding: 8px;
  margin: 8px;
  font-size: 32px;
  color: #3f3f3f;
  background-color: #b8f4ff;
`;

export const Item = ({ item }) => {
  return <ItemContainer>{item.text}</ItemContainer>;
};
