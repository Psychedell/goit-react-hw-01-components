import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${p => p.theme.colors.background};
  width: 300px;
  text-align: center;
  margin: auto;
  margin-top: 30px;
  padding-top: 10px;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-top: 5px;
  margin-top: 8px;
`;

export const Tag = styled.p`
  font-size: 16px;
  margin-top: 5px;
`;

export const Location = styled.p`
  font-size: 16px;
  margin-top: 5px;
`;

export const Stats = styled.ul`
  display: flex;
  background-color: ${p => p.theme.colors.border};
  margin-top: 8px;
`;

export const ProfileList = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border: solid 1px ${p => p.theme.colors.background};
  width: 100px;
  height: 45px;
  padding: 4px;

  flex-direction: column;
  align-items: center;
`;

export const Label = styled.span`
  font-style: italic;
`;

export const Quantity = styled.span`
  font-size: 18px;
  font-weight: 500;
  margin-top: 5px;
`;
