import css from './HomePage.module.css';

import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <div className={css.hero}>
        <div className={css.homecontent}>
          <h1 className={css.homeTitle}>Campers of your dreams</h1>
          <p className={css.homeParagraph}>
            You can find everything you want in our catalog
          </p>

          <NavLink to="/catalog" className={css.homeButton}>
            View Now
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
