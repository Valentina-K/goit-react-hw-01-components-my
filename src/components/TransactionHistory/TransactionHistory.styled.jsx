import styled from '@emotion/styled';
export const TransactionTable = styled.table`
  font-size: ${({theme})=>theme.fontsize.mainFontSize};
  width: 60%;
  margin: 0 auto;
  border-radius: 10px;
  border-spacing: 0;
  text-align: center;
  box-shadow: 9px 10px 10px -6px rgba(0, 0, 0, 0.62);
`;

export const TableBody = styled.tbody`
  background: rgb(236, 245, 247);
`;

export const TableTd = styled.td`
  padding: ${({theme}) => theme.spacing(2)} ${({theme}) => theme.spacing(5)};
  color: ${({ theme }) => theme.fontcolor.profileTextColor};
  border-style: solid;
  border-width: 0 1px 1px 0;
  border-color: rgb(163, 160, 160);
  :first-of-type {
    text-transform: capitalize;
  }
  `;

export const TableHead = styled.th`
  font-weight: 700;
  text-transform: uppercase;
  background: #25c3f3;
  color: ${({theme})=>theme.fontcolor.textColorContrast};
  text-shadow: 0 1px 1px #2d2020;
  padding: ${({theme}) => theme.spacing(2)} ${({theme}) => theme.spacing(5)};
  border-style: solid;
  border-width: 0 1px 1px 0;
  border-color: rgb(163, 160, 160);
  `;

export const TableTr = styled.tr`
  :nth-of-type(2n) {
    background-color: #fff;
  `;
    