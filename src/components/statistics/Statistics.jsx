import PropTypes from 'prop-types'
import { Wrapper, Title, StatList, Item, Label, Percentage } from './Statistics.styled'


export const Statistics = ({title, stats}) => {
    return <Wrapper> <section className="statistics">
        {title && <Title className="title">{title}</Title>}
        
        <StatList className="stat-list">
            {stats.map(({id, label, percentage}) => <Item className="item" key={id}>
      <Label className="label">{label}</Label>
      <Percentage className="percentage">{percentage}%</Percentage>
    </Item>)}
  </StatList>
    </section>
        </Wrapper>
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }))

}
