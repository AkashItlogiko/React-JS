import { v4 as uuidv4 } from 'uuid';
import Newcountery from './Newcountery';
import Countery from './Countery';
import style from './countries.module.css';

const Countries = props => {
  return (
    <section className={style.countries}>
      {props.countries.map(countery => {
        const countryNew = { countery, id: uuidv4() };

        return (
          <Newcountery
            {...countryNew}
            key={countryNew.id}
            onRemoveCountry={props.onRemoveCountry}
          />
        );
      })}
    </section>
  );
};

export default Countries;
