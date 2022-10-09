import styled from 'styled-components';

export const Table = styled.table`
  background-color: ${p => p.theme.colors.border};
  width: 600px;
  text-align: center;
  margin: auto;
  margin-top: 30px;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  background-color: ${p => p.theme.colors.background};
  height: 30px;
`;

export const TheadTh = styled.th`
  border: 1px solid ${p => p.theme.colors.border};
`;

export const TbodyTh = styled.td`
  border: 1px solid ${p => p.theme.colors.background};
  text-transform: capitalize;
`;

export const TbodyTr = styled.tr`
  height: 35px;

  &:nth-of-type(even) {
    background-color: ${p => p.theme.colors.white};
  }
  &:hover {
    background: linear-gradient(top, #f5f5f5, #d2d2d2);
    box-shadow: 0 1px 4px rgba(0, 0, 0, 10),
      -23px 0 20px -23px rgba(0, 0, 0, 0.8),
      23px 0 20px -23px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  }
`;
