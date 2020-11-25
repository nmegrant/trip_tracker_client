import styled from "styled-components";

export const SearchButton = styled.button`
  background-color: #00916e;
  color: #feefe5;
  font-size: 16px;
  max-height: 40px;
  border: none;
  border-radius: 8px;
  padding: 5px 10px;
  margin: 5px;
  border: solid 2px #00916e;
  transition-duration: 0.4s;
  &:hover {
    background-color: #feefe5;
    color: #00916e;
    border: solid 2px #00916e;
  }
`;

export const ModeButton = styled.button`
  background-color: #2274a5;
  color: #feefe5;
  font-size: 16px;
  border: none;
  max-height: 40px;
  border-radius: 8px;
  padding: 5px 10px;
  margin: 5px;
  border: solid 2px #2274a5;
  transition-duration: 0.4s;
  &:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;

export const Table = styled.table`
  margin: 2rem;
`;

/* Array */
// ["2274a5","f75c03","00916e","d90368","feefe5"]

/* Object */
// {"Star Command Blue":"2274a5","Orange Pantone":"f75c03","Illuminating Emerald":"00916e","Dogwood Rose":"d90368","Linen":"feefe5"}
