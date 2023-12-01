import styled from 'styled-components';

export const UserAvatar = styled.img`
  width: 100px;
  border-radius: 100%;
  margin-bottom: 20px;
  background-color: white;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding: 40px;
  color: grey;
  background-color: white;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
`;

export const Wrapper = styled.div`
  width: 330px;
  background-color: rgba(46, 47, 66, 0.08);
  border-radius: 0px 0px 4px 4px;
  margin-bottom: 40px;
  border-radius: 7px;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const StatsItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 15px;
  border: 1px solid #a4a6a8;
  border-end-end-radius: 7px;
  border-end-start-radius: 7px;
  background-color: #c8c9cc;
`;

export const Name = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: 0.02em;
  color: black;
`;

export const Quantity = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0.01em;
`;
