import { useLocation } from 'react-router-dom';
import './style.scss';
import HeaderBase from '../headerBase/HeaderBase';
import HeaderLogin from '../headerLogin/HeaderLogin';

const Header = ({ state, settingHeader, exact, match }) => {
  const location = useLocation();
  const loginHeaderPages = ['/authorization', '/registration'];
  const getHeader = () => {
    if (loginHeaderPages.includes(location.pathname)) {
      return <HeaderLogin />;
    } else {
      return <HeaderBase />;
    }
  };

  return getHeader();
};

export default Header;
