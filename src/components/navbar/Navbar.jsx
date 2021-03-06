import React from 'react'
import "./Navbar.css"
import GitHubIcon from '@material-ui/icons/GitHub';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AddIcon from '@material-ui/icons/Add';
import NavbarItem from "../NavbarItem/NavbarItem"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import profil from "../../assets/images/profil.jpg"

import MenuIcon from '@material-ui/icons/Menu';

function Navbar() {
  return (
    <div className="Navbar">
      <MenuIcon className="toggle_icon" />
      <div className="Navbar_items_container">
        <GitHubIcon className="Navbar__GithubIcon" />
        <div className="large_menu_container">
          <input type="text" placeholder="Search or jump to..." className="header_search_input" />
          <img src="https://github.githubassets.com/images/search-key-slash.svg" className="github_svg" alt=""/>
          <div className="NavbarItem__container">
            <NavbarItem title="Pull requests" />
            <NavbarItem title="Issues" />
            <NavbarItem title="Marketplace" />
            <NavbarItem title="Explore" />
          </div>
        </div>
      </div>
      <div className="Navbar_icons_container">
        <NotificationsNoneIcon className="Right_Icon" />
        <div className="large_menu_container">
          <AddIcon className="Right_Icon" />
          <ArrowDropDownIcon className=" ArrowIcon" />
          <img src="https://cdn4.vectorstock.com/i/thumb-large/51/48/cartoon-character-in-glasses-avatar-young-man-vector-33215148.jpg" alt="" className="header_profil"/>
          <ArrowDropDownIcon className=" ArrowIcon" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
