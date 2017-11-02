/* @flow */

import React from "react";

import { Root } from "native-base";
import { StackNavigator } from "react-navigation";

import Drawer from "./Drawer";
import {Login} from "./component/login/login";


const AppNavigator = StackNavigator(
  {
    Drawer: { screen: Drawer },
    Login: { screen: Login}

  },
  {
    initialRouteName: "Drawer",
    headerMode: "none",
  }
);

export default () =>
  <Root>
    <AppNavigator />
  </Root>;
