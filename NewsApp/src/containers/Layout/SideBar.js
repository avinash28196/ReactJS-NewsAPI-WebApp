import React from "react";
import { NavLink} from "react-router-dom";
import  { links } from './NewsApi';


let linksComponents = links.map((link, index) => {
    return (
        <li key={index} className={'list-group-item'}>
            <img width="35" height="35" src={link.icon} className="mr-3 rounded-circle" alt="NA"/>
            <NavLink className={'navLink text-info' }
                  activeClassName={'activeNavLink'}
                  to={link.url}
                  onClick={window.location.reload}
                  exact><b>{link.name}</b>
            </NavLink>
        </li>
    );
});

class SideBar extends React.Component {

  render() {
    return(
      <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">

          <ul className="list-group list-group-flush mb-5">
              {linksComponents}
          </ul>

      </div>
    );
  }
}

export default SideBar;
