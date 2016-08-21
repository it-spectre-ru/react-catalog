import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';


const Header = ({loading}) => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Домой</IndexLink>
      {" | "}
      <Link to="/courses" activeClassName="active">Курсы</Link>
      {" | "}
      <Link to="/about" activeClassName="active">Информация</Link>
    </nav>
  );
};

export default Header;

