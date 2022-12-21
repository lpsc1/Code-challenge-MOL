import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  min-height: 100vh;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`;

export const Form = styled.form`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
`;
  
export const Title = styled.h2`
  margin-bottom: 10px;
`;

export const Label = styled.label`
  width: 100%;
  margin-top: 10px;
  font-size: smaller;
  margin-bottom: 2px;
  align-self: center;
`;

export const Select = styled.select`
  width: 100%;
  align-self: center;
  padding: 2%;
  border-radius: 5px;
  border: 1px solid lightgray;
`;
  

export const Input = styled.input`
  max-width: 97%;
  width: 100%;
  align-self: center;
  padding: 2% 0 2% 3%;
  border-radius: 5px;
  border: 1px solid lightgray;
  text-transform: capitalize;
`;

export const Line =  styled.div`
  width: 102%;
  align-self: center;
  margin: 30px;
  border-bottom: 1px solid lightgray;
`;

export const InputWithAddButton = styled.input`
  width: 88%;
  align-self: center;
  padding: 2% 0 2% 3%;
  border-radius: 5px;
  border: 1px solid lightgray;
`;

export const InputBox = styled.div`
  display: flex;
  width: 110%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Image = styled.img``;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  width: 40%;
  padding: 2% 0;
  border-radius: 5px;
  border: none;
  background-color: lightgray;
  margin-top: 40px;
  cursor: pointer;
`;
