import React from 'react';
import { useHistory } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import UserService from '../../services/UserService';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// icons
import PausePresentationIcon from '@material-ui/icons/PausePresentation';
import LogoutIcon from '@material-ui/icons/ExitToApp';


const useStyles = makeStyles({
	list: {
		width: 250,
	},
	fullList: {
		width: 'auto',
	},
	logoutIconTheme: {
		color: 'red'
	}
});

export default function MyDrawerList() {
	const classes = useStyles();
	const history = useHistory();

	const handleLinkURL = (url) => {
		history.push(url);
	};

	const logout = () => {
        UserService.logout()
            .then(() => history.replace('/'))
        ;
    }

	return (
		<div className={clsx(classes.list)}>
			<List>
				<ListItem
					button
					onClick={() => handleLinkURL('/app/dashboard')}
				>
					<ListItemIcon><PausePresentationIcon /></ListItemIcon>
					<ListItemText primary="Dashboard" />
				</ListItem>
				<Divider />
				<ListItem
					button
					onClick={logout}
				>
					<ListItemIcon><LogoutIcon className={classes.logoutIconTheme} /></ListItemIcon>
					<ListItemText primary="Sair" />
				</ListItem>
				<Divider />
			</List>
		</div>
	);
}