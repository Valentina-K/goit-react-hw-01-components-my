import styled from '@emotion/styled';
export const ProfileBox = styled.div`
  width: 250px;
  margin-bottom: ${({theme}) => theme.spacing(22)};
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  box-shadow: 9px 10px 10px -6px rgba(0, 0, 0, 0.62);
  `;
export const DescriptionBox = styled.div`
  background-color: #fff;
  padding-top: ${({theme}) => theme.spacing(7)};
  padding-bottom: ${({theme}) => theme.spacing(7)};
  `;

export const Avatar = styled.img`
  width: 100px;
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
  `;

export const UserName = styled.p`
  font-size: ${({theme})=>theme.fontsize.mainFontSize};
  color: ${({theme})=>theme.fontcolor.textColor};
  font-weight: 700;
  `;

export const ExtentionPropUser = styled.p`
  font-size: ${({theme})=>theme.fontsize.secondFontSize};
  color: ${({theme})=>theme.fontcolor.profileTextColor};
  `;

export const StatsBox = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f1f5f6;
  li{
    flex-basis: calc((100% - 6px) / 3);
    padding-top: ${({theme}) => theme.spacing(4)};
    padding-bottom: ${({theme}) => theme.spacing(6)};
    text-align: center;
    border: 1px solid rgb(233, 233, 233);
  `;

export const Quantity = styled.span`
  color: ${({theme})=>theme.fontcolor.textColor};
  font-size: ${({theme})=>theme.fontsize.secondFontSize};
  font-weight: 500;
  `;

export const Label = styled.span`
  font-size: ${({theme})=>theme.fontsize.secondFontSize};
  color: ${({theme})=>theme.fontcolor.profileTextColor};
`;