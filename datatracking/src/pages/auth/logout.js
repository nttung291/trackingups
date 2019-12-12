import React from 'react'
import Configs from "../../config"
import AuthService from "../../services/auth"

class Logout extends React.Component {
	static getInitialProps({req, res}) {
		const Auth = new AuthService();
		Auth.logout(res);
		res.redirect(Configs.loginPath);
	}
}

export default Logout
