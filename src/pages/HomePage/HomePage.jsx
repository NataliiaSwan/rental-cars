// import React from 'react';
// import { Link } from 'react-router-dom';
// import css from './HomePage.module.css';
// import Header from '../../components/Header/Header';

// const HomePage = () => (
//   <>
//     <Header />
//     <div className={css.hero}>
//       <div className={css.homecontent}>
//         <h1 className={css.homeTitle}>Campers of your dreams</h1>
//         <p className={css.homeParagraph}>
//           You can find everything you want in our catalog
//         </p>

//         <Link to="/catalog" className={css.homeButton}>
//           View Now
//         </Link>
//       </div>
//     </div>
//   </>
// );

// export default HomePage;

import React from 'react';
import css from './HomePage.module.css';
import Header from '../../components/Header/Header';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className={css.hero}>
        <div className={css.homecontent}>
          <h1 className={css.homeTitle}>Campers of your dreams</h1>
          <p className={css.homeParagraph}>
            You can find everything you want in our catalog
          </p>
          <button
            className={css.homeButton}
            onClick={() => navigate('/catalog')}
          >
            View Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
