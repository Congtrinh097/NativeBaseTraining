/* @flow */

import React from "react";
import { DrawerNavigator } from "react-navigation";

import {Login} from "./component/login/login";
import SideBar from "./component/sidebar/index";

const Drawer = DrawerNavigator(
  {
    Home: { screen: Login }
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

export default Drawer;
