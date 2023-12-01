import { StatsItem } from './StatisticItem.styled';

export const StatisticsItem = ({ label, percentage }) => {
  return (
    <StatsItem
      style={{ backgroundColor: `rgba(${random()}, ${random()}, ${random()})` }}
    >
      <span>{label}</span>
      <span>{percentage}%</span>
    </StatsItem>
  );
};
function random() {
  return Math.floor(Math.random() * 256);
}
