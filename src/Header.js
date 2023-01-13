import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
// import SearchIcon from "@material-ui/icons/Search";
import SearchIcon from "@mui/icons-material/Search";
// import MenuIcon from "@material-ui/icons/Menu";
import MenuIcon from "@mui/icons-material/Menu";
// import RefreshIcon from "@material-ui/icons/Refresh";
import RefreshIcon from "@mui/icons-material/Refresh";
// import ViewColumnIcon from "@material-ui/icons/ViewColumn";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
// import SettingsIcon from "@material-ui/icons/Settings";
import SettingsIcon from "@mui/icons-material/Settings";
import img from "./img/keep.png";

const Header = (props) => {
  const [Val, setVal] = useState();

  const GetTitleSearch = (event) => {
    const { value } = event.target;
    setVal(value);
    props.TitleSearch(value);
  };

  return (
    <div className="container-fluid bg-dark">
      <div className="row d-flex align-items-center header">
        <div className="col-2 text-light">
          <div className="row">
            <div
              className="col-3 d-flex align-items-center justify-content-center"
              onClick={props.fun}
            >
              <MenuIcon role="button" />
            </div>
            <div className="col-4 d-flex align-items-center justify-content-center px-0">
              <img src={img} alt="logo" />
            </div>
            <div className="col-4 d-flex align-items-center justify-content-center px-0 fs-3 fw-bold">
              Keep
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="input-group flex-nowrap">
            <span className="input-group-text" id="addon-wrapping">
              <SearchIcon role="button" />
            </span>
            <input
              type="text"
              class="form-control header_search"
              placeholder="Note's title"
              value={Val}
              onChange={GetTitleSearch}
            />
          </div>
        </div>
        <div className="col-2 text-light">
          <div className="row">
            <div className="col-3 d-flex align-items-center justify-content-center px-0 text-secondary">
              <RefreshIcon role="button" />
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center px-0 text-secondary">
              <ViewColumnIcon role="button" />
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center px-0 fs-2 fw-bold text-secondary">
              <SettingsIcon role="button" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
