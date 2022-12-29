import styled from '@emotion/styled';
export const Container = styled.div`
  width: 100%;
  padding: 25px;
  height: 100vh;
  display: block;
  font-size: ${({theme})=>theme.fontsize.mainFontSize};
  color: ${({theme})=>theme.fontcolor.textColor};
  `;