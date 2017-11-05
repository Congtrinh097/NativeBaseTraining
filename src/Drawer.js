/* @flow */

import React from "react";
import { DrawerNavigator } from "react-navigation";

import {Tools} from "./component/tools/index";
import {Login} from "./component/login/login";
import SideBar from "./component/sidebar/index";
import {Expense} from "./component/expense/index";
import {Income} from "./component/income/index";
import {Debt} from "./component/debt/index";
import {Configuration} from "./component/configuration/index";
import {Statistic} from "./component/statistic/index";
import {About} from "./component/about/index";
import {ReactCalculator} from "./component/tools/calculator/ReactCalculator";
import {StopWatch} from "./component/tools/stopwatch/stopwatch";
import {Calendar} from "./component/tools/calendar/index";
import AddNewExpense from "./component/expense/AddNewExpense";

const Drawer = DrawerNavigator(
  {
    Tools: { screen: Tools },
    Login: { screen: Login },
    Expense: { screen: Expense },
    Income: { screen: Income },
    Debt:{ screen: Debt},
    Configuration: { screen: Configuration},
    Statistic: {screen: Statistic},
    About: {screen: About},
    Calculator: {screen: ReactCalculator},
    StopWatch: {screen: StopWatch},
    Calendar: { screen: Calendar},
    AddNewExpense: {screen: AddNewExpense}
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
