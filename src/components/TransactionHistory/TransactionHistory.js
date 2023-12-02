import {
  ColumnTbody,
  ColumnTd,
  ColumnTh,
  ColumnThead,
  ColumnTr,
  NewColumnTd,
  Wrapper,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Wrapper>
      <ColumnThead>
        <ColumnTr>
          <ColumnTh>Type</ColumnTh>
          <ColumnTh>Amount</ColumnTh>
          <ColumnTh>Currency</ColumnTh>
        </ColumnTr>
      </ColumnThead>
      {items.map(items => (
        <ColumnTbody key={items.id}>
          <ColumnTr>
            <NewColumnTd>{items.type}</NewColumnTd>
            <ColumnTd>{items.amount}</ColumnTd>
            <ColumnTd>{items.currency}</ColumnTd>
          </ColumnTr>
        </ColumnTbody>
      ))}
    </Wrapper>
  );
};
