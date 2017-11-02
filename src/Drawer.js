/* @flow */

import React from "react";
import { DrawerNavigator } from "react-navigation";

import {Home} from "./component/home";
import {Login} from "./component/login/login";
import SideBar from "./component/sidebar/index";
import {Expense} from "./component/expense/index";
import {Income} from "./component/income/index";
import {Debt} from "./component/debt/index";
import {Configuration} from "./component/configuration/index";
import {Statistic} from "./component/statistic/index";
import {About} from "./component/about/index";

const Drawer = DrawerNavigator(
  {
    Home: { screen: Home },
    Login: { screen: Login },
    Expense: { screen: Expense },
    Income: { screen: Income },
    Debt:{ screen: Debt},
    Configuration: { screen: Configuration},
    Statistic: {screen: Statistic},
    About: {screen: About}
  },
  {
    initialRouteName: "Login",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

export default Drawer;
