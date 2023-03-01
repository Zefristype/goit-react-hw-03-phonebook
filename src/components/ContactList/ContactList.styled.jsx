import styled from '@emotion/styled';

export const Contacts = styled.ul`
width: 540px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid black;
  padding: 10px;
  font-size: 20px;
`;

export const Button = styled.button`
  color: #fff;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 400;
  color: #000;
  background-color: #fff;
  border: 1px solid black;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  outline: none;
  padding: 16px;
  transition: all 0.3s ease 0s;
  :hover {
    background-color: #e52e2e;
    box-shadow: 0px 15px 20px rgba(231, 83, 83, 0.4);
    color: #fff;
    transform: translateY(-7px);
  }
`;