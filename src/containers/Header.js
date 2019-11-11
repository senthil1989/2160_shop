import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import HeaderComponent from "../components/HeaderComponent";
import { curUser } from "../actions";

function Header(props) {

  return (
    <HeaderComponent {...props}/>
  );
}
const mapStateToProps = (state, ownprops )=> {
  return {
    userData: state.mainSection
  };
};

const mapDispatchToProps = dispatch => ({
  curUser:(curuser)=>  dispatch(curUser(curuser))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
