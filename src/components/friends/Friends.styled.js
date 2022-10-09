import styled from 'styled-components';

export const FriendListUl = styled.ul`
  /* display: flex; */
  /* flex-direction: column; */
  width: 220px;
  /* text-align: center; */
  margin: auto;
  margin-top: 30px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  border: solid 2px ${p => p.theme.colors.background};
  border-radius: 10px;
  height: 45px;
  padding: 8px;
  margin: 10px;
  align-items: center;

  box-shadow: 0 1px 4px rgba(0, 0, 0, 1), -23px 0 20px -23px rgba(0, 0, 0, 0.8),
    23px 0 20px -23px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.1) inset;

  &:hover {
    cursor: pointer;
    background-color: ${p => p.theme.colors.background};
  }
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border: solid 2px ${p => p.theme.colors.background};
  border-radius: 50%;
  margin-right: 25px;
  background-color: ${p => {
    return p.active ? p.theme.colors.green : p.theme.colors.red;
  }};
`;

export const Name = styled.p`
  margin-left: 15px;
`;
