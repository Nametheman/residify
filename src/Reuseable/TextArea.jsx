/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Container = styled.textarea`
  width: 100%;
  background: transparent;
  border: 1px solid #e5e5e5;
  padding: 1rem;
  height: 100%;
  border-radius: 5px;
  font-style: normal;
  font-weight: 500;
  font-size: 1em;
  letter-spacing: 0.018em;
  color: #000000;
  width: 100%;

  :focus {
    outline: none;
    border: 1px solid #bdbdbd;
  }

  @media screen and (max-width: 450px) {
    font-size: 0.8em;
  }
`;
const Index = ({ placeholder, onTextChange, fieldname, value }) => {
  return (
    <Container
      rows={3}
      value={value}
      name={fieldname}
      placeholder={placeholder}
      onChange={onTextChange}
    />
  );
};

export default Index;