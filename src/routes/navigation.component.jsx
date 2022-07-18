import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import {ReactComponent as AppLogo} from "./../assets/crown.svg"
import "./navigation.styles.scss"



function Navigation() {
  return (
    <Fragment>
      <div className="navigation" >
        <Link className="logo-container" to="/">
          <AppLogo/>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/auth">
           SING IN
          </Link>
        </div>
      </div>

      <Outlet />
    </Fragment>
  );
}

export default Navigation;
