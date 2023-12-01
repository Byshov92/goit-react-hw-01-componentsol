import { StatisticsItem } from 'components/StatisticItem/StatisticItem';
import {
  Stats,
  StatsTitle,
  StatsList,
} from 'components/Statistics/Statistics.styled';
export const Statistics = ({ title, stats }) => {
  return (
    <Stats>
      {title && <StatsTitle>{title}</StatsTitle>}
      <StatsList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsItem key={id} label={label} percentage={percentage} />
        ))}
      </StatsList>
    </Stats>
  );
};
