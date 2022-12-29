import styled from '@emotion/styled';
export const Item = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 400px;
  padding: 20px;
  margin-bottom: 18px;
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;
  box-shadow: 3px 7px 6px 0px rgba(0, 0, 0, 0.63);
`;

export const Status = styled.span`
  color: ${props => {
    return props.isOnline ? 'green' : 'red';
}}
`;

export const Avatar = styled.img`
  margin-left: 20px;
  width: 96px;
  border-radius: 8px;
  `;

export const UserName = styled.p`
  margin-left: 20px;
  font-size: ${({theme})=>theme.fontsize.mainFontSize};
  font-weight: 500;
  `;