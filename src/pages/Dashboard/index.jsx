import { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import MyMap from '../../components/MyMap';
import MyDrawerList from '../../components/MyDrawerList';
import {
    IconButton,
    Drawer,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import './style.css';

const useStyles = makeStyles((theme) => ({
    drawerButton: {
        '&:focus': {
            outline: 'none',
        },
        position: 'absolute',
        top: 20,
        right: 30,
        zIndex: 999,
        color: '#fff',
        '& .MuiSvgIcon-root': {
            fontSize: 32,
        }
    }
}));

export default function Dashboard({ history }) {
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (openDrawer) => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return null;
        }
		setDrawerOpen(openDrawer);
	};

    return (
        <div className="dashboard-page">
            <MyMap
                cordenates={[-9.656480487038857, -35.738257221931654]}
                zoom={16}
            />
            <IconButton
                edge="start"
                color="inherit"
                onClick={toggleDrawer(true)}
                aria-label="menu"
                className={classes.drawerButton}
            >
                <MenuIcon />
            </IconButton>
            <Drawer
				anchor="right"
				open={drawerOpen}
				onClose={toggleDrawer(false)}
			>
				<MyDrawerList />
			</Drawer>
        </div>
    );
}
