import React, { Component } from "react";
import { Image } from "react-native";

import {
	Content,
	Text,
	List,
	ListItem,
	Icon,
	Container,
	Left,
	Right,
	Badge,
	Button,
	View,
	StyleProvider,
	getTheme,
	variables,
} from "native-base";

import styles from "./style";

const drawerCover = require("../../../img/banner.jpg");

const drawerImage = require("../../../img/money_logo.png");

const datas = [

	{
		name: "Chi tiêu",
		route: "Expense",
		icon: "easel",
		bg: "#C5F442",
	},
	{
		name: "Thu nhập",
		route: "Income",
		icon: "phone-portrait",
		bg: "#477EEA",
		types: "8",
	},
	{
		name: "Các khoản nợ",
		route: "Debt",
		icon: "beer",
		bg: "#DA4437",
		types: "4",
	},
  {
    name: "Tiện ích",
    route: "Tools",
    icon: "logo-github",
    bg: "#C5F442",
  },
	{
		name: "Cấu hình",
		route: "Configuration",
		icon: "settings",
		bg: "#4DCAE0",
	},
	{
		name: "Thống kê",
		route: "Statistic",
		icon: "paper",
		bg: "#1EBC7C",
		types: "9",
	},
	{
		name: "Thông tin",
		route: "About",
		icon: "information-circle",
		bg: "#48525D",
	},
];

class SideBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shadowOffsetWidth: 1,
			shadowRadius: 4,
		};
	}

	render() {
		return (
			<Container>
				<Content bounces={false} style={{ flex: 1, backgroundColor: "#fff", top: -1 }}>
					<Image source={drawerCover} style={styles.drawerCover}>
						<Image square style={styles.drawerImage} source={drawerImage} />
					</Image>
					<List
						dataArray={datas}
						renderRow={data =>
							<ListItem button noBorder onPress={() => this.props.navigation.navigate(data.route)}>
								<Left>
									<Icon active name={data.icon} style={{ color: "#777", fontSize: 26, width: 30 }} />
									<Text style={styles.text}>
										{data.name}
									</Text>
								</Left>
								{data.types &&
									<Right style={{ flex: 1 }}>
										<Badge
											style={{
												borderRadius: 3,
												height: 25,
												width: 72,
												backgroundColor: data.bg,
											}}
										>
											<Text style={styles.badgeText}>{`${data.types} Types`}</Text>
										</Badge>
									</Right>}
							</ListItem>}
					/>
				</Content>
			</Container>
		);
	}
}

export default SideBar;
