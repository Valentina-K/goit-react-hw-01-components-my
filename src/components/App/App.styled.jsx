import styled from '@emotion/styled';
export const Container = styled.div`
  width: 100%;
  padding: ${({theme}) => theme.spacing(6)};
  height: 100vh;
  display: block;
  font-size: ${({theme})=>theme.fontsize.mainFontSize};
  color: ${({theme})=>theme.fontcolor.textColor};
  `;