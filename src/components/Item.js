import React from "react";
import styled from "styled-components";

export const Item = ({ item }) => {
  const ItemContainer = styled.ul`
    align-self: flex-start;
    padding: 8px;
    margin: 8px;
    font-size: 32px;
    color: #3f3f3f;
    background-color: #b8f4ff;
  `;

  return <ItemContainer>{item}</ItemContainer>;
};
