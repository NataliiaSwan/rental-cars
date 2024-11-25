import { Field, Form, Formik } from 'formik';
import Text from '../../components/Text/Text.jsx';
import css from './FilterList.module.css';
import Button from '../../components/Button/Button.jsx';
import Filters from '../../components/Filters/Filters.jsx';
import VehicleTypeFilters from '../../components/VehicleTypeFilters/VehicleTypeFilters.jsx';

function FilterList() {
  return (
    <div className={css.filterDiv}>
      <Formik
        initialValues={{
          equipment: [],
          vehicleType: '',
        }}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.setSubmitting(false);
        }}
      >
        <Form className={css.filterForm}>
          <label className={css.label} htmlFor="searchLocation">
            Location
          </label>
          <div className={css.location}>
            <svg height={20} width={20} className={css.icon}>
              <use href="src/assets/icons/symbol-defs.svg#icon-map"></use>
            </svg>
            <Field
              className={css.input}
              name="searchLocation"
              id="searchLocation"
              placeholder="Enter your city..."
            />
          </div>

          <h4 className={css.title}>Filters</h4>
          <Text text="Vehicle equipment" />
          <hr className={css.divider} />
          <Filters />
          <Text text="Vehicle type" />
          <hr className={css.divider} />
          <VehicleTypeFilters />
          <Button text="Search" />
        </Form>
      </Formik>
    </div>
  );
}

export default FilterList;
