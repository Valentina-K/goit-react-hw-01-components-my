import styled from '@emotion/styled';
export const StatSection = styled.section`
  text-align: center;
  margin: 0 auto ${({theme}) => theme.spacing(22)};
  width: 50%;
  box-shadow: 9px 10px 10px -6px rgba(0, 0, 0, 0.62);
`;
export const Title = styled.h2`
  font-size: ${({theme})=>theme.fontsize.mainFontSize};
  padding: ${({theme}) => theme.spacing(9)} 0;
  background-color: #fff;
  text-transform: uppercase;
  `;

export const StatList = styled.ul`
  display: flex;
`;

export const Item = styled.li`
flex: 1 1;
  list-style: none;
  padding: ${({theme}) => theme.spacing(5)};
  color: #fff;
  `;

export const Label = styled.span`
font-size: ${({theme})=>theme.fontsize.secondFontSize};
`;

export const Percentage = styled.span`
font-size: ${({theme})=>theme.fontsize.mainFontSize};
`;