import styled from '@emotion/styled';
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border: 2px solid black;
  padding: 20px;
  margin: 20px 0;
  border-radius: 25px;
`;

export const Input = styled.input`
  padding: 5px;
  width: 100%;
  font-weight: 400;
  border: 2px solid black;
  border-radius: 25px;
  padding-left: 20px;
`;

export const Label = styled.label`
  font-weight: 400;
  text-align: center;
  width: 100%;
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
  padding: 20px;
  transition: all 0.3s ease 0s;
  :hover {
    background-color: #2ee59d;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
  }
`;
