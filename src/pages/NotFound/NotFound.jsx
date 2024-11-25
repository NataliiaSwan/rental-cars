// import { NavLink } from 'react-router-dom';
// import css from './NotFound.module.css';

// function NotFound() {
//   return (
//     <div className={css.notFoundBox}>
//       <svg
//         className={css.notFoundSvg}
//         width="48"
//         height="48"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <circle cx="11" cy="11" r="8" />
//         <line x1="21" y1="21" x2="16.65" y2="16.65" />
//         <line x1="8" y1="8" x2="14" y2="14" />
//       </svg>
//       <p> We did not find anything!</p>
//       <NavLink className={css.link} to="/">
//         Back to Home!
//       </NavLink>
//     </div>
//   );
// }

// export default NotFound;

import { NavLink } from 'react-router-dom';
import css from './NotFound.module.css';
import { TbViewfinderOff } from 'react-icons/tb';

function NotFound() {
  return (
    <div className={css.notFoundBox}>
      <TbViewfinderOff className={css.notFoundSvg} />
      <p>Oops! We did not find anything!</p>
      <NavLink className={css.link} to="/">
        Back to Home!
      </NavLink>
    </div>
  );
}
export default NotFound;
