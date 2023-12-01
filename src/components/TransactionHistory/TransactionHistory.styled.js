import styled from 'styled-components';

export const Wrapper = styled.table`
  width: 100%;
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
`;

export const ColumnTr = styled.tr`
  width: 100%;
  display: flex;
  align-items: center;
`;
export const ColumnTh = styled.th`
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid white;
`;

export const ColumnTd = styled.td`
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid white;
  &::first-letter {
    text-transform: uppercase;
  }
`;

export const ColumnThead = styled.thead`
  width: 100%;
  background-color: #54c7ec;
`;

export const ColumnTbody = styled.thead`
  width: 100%;
  background-color: #c8c9cc;
  &:nth-child(odd) {
    background-color: #d4d5d8;
  }
`;
