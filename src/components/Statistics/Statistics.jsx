import PropTypes from 'prop-types';
import {StatSection,Title,StatList,Item,Label,Percentage} from './Statistics.styled';
export const Statistics = ({title, stats}) => {
    return <StatSection>
      {title && (
        <Title>{title}</Title>
    )}
    <StatList>
        {stats.map(({id,label,percentage}) =>
          <Item key={id} style={{
                backgroundColor: `${getRandomHexColor()}`}}>                  
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
          </Item>)}    
    </StatList>
</StatSection>
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

Statistics.protoTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      label:PropTypes.string.isRequired,
    })
  ),
}
