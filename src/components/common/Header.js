import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => { // add
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Домой</IndexLink>
      {" | "}
      <Link to="/courses" activeClassName="active">Курсы</Link>
      {" | "}
      <Link to="/about" activeClassName="active">Информация</Link>
      {loading && <LoadingDots intervel={100} dots={20}/>}
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;

