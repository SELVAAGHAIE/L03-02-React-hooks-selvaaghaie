import { Link } from 'react-router-dom';
import styles from './Header.module.css';
const Header = () => {
  return (
    <header>
        <ul className={styles.unorderedList}>
          <li className={styles.list}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.list}>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
    </header>
  );
};

export default Header;