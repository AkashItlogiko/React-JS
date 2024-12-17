import { v4 as uuidv4 } from 'uuid';
import Newcountery from './Newcountery';
import Countery from './Countery';

const Countries = props => {
  return (
    <section>
      {props.countries.map(countery => {
        const countryNew = { countery, id: uuidv4() };

        return <Newcountery {...countryNew} key={countryNew.id} />;
      })}
    </section>
  );
};

export default Countries;
