import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Item } from "./Item";
import { todos } from "../reducers/todos";

export const List = () => {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.todos);

  const ListContainer = styled.ul`
    display: flex;
    width: 100%;
    flex-direction: column;
  `;

  const ListActionButton = styled.button`
    align-self: center;
    padding: 4px;
    margin: 2px;
    font-size: 22px;
    color: #3f3f3f;
  `;

  return (
    <ListContainer>
      {items.map((item, index) => {
        return <Item key={index} item={item}></Item>;
      })}
      <ListActionButton onClick={() => dispatch(todos.actions.removeOne())}>
        Remove One
      </ListActionButton>
    </ListContainer>
  );
};
