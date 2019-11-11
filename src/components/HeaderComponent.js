import React, { useState, useEffect } from "react";
import UserIcon from "../components/UserIcon";
import UserList from "../components/UserList";
import {search} from "../common/fonts/icons/search.svg";
import { curUser } from "../actions";

function HeaderComponent(props) {
  const { userData,curUser } = props;

  const [listActive, setlistActive] = useState(false);
  const [currentUser, setcurrentUser] = useState(userData[0]);
  const [iconText, seticonText] = useState("");

  useEffect(() => switchUser(currentUser),[]);

  const switchUser = curuser => {
    const {userName} =curuser;
    var uText = userName.substring(0, 3);
    seticonText(uText);
    curUser(curuser);
  };

  const iconActive = iActive => {

    setlistActive(!iActive);
  };
  return (
    <header>
      <div class="iconText">
        <a href="#">
          Offer Shops
        </a>
      </div>
        <form class="searchbox">
            <input type="Search" placeholder="eg: Velachery" name="Search"/>
            <button type="submit" ><span class="icon-search"></span></button>
        </form>
      <div>
       
      </div>
    </header>
  );
}

export default HeaderComponent;
