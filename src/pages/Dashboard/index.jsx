import { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import MyMap from '../../components/MyMap';
import MyDrawerList from '../../components/MyDrawerList';
import {
    IconButton,
    Drawer,
    TextField
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import './style.css';
import UserService from '../../services/UserService';

const useStyles = makeStyles((theme) => ({
    drawerButton: {
        '&:focus': {
            outline: 'none',
        },

        top: 20,
        right: 30,
        zIndex: 999,
        color: '#fff',
        '& .MuiSvgIcon-root': {
            fontSize: 32,
        }
    },
    searchAddressInput: {
        '& > *': {
            height: 45,
            width: '21em',
            fontSize: 22,
        },

        top: 20,
        zIndex: 999,
        '&:focus, & > label, & .Mui-focused': {
            outlineColor: '#fff',
            color: '#fff',
        },
        '& .MuiInput-underline:after, .MuiInput-underline:before': {
            borderBottomColor: '#fff',
        },
    },

    headerArea: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        position: 'absolute',
        right: 0,
        justifyContent: 'space-around',
    },
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
    
    const getCordenates = (address) => {
        UserService.searchAddressGeocoding(address)
            .then((res => {
                const coord = res.data.features[0].center;
                localStorage.setItem('locale', res.data.features[0].place_name);
                localStorage.setItem('coordinates', JSON.stringify([coord[1], coord[0]]));
                window.location.reload(false);
            }))
            .catch(error => console.log(error.message));
    }

    return (
        <div className="dashboard-page">
            <MyMap
                coordinates={UserService.getCurrentCoordinates()}
                zoom={16}
                locale={UserService.getCurrentLocale()}
            />
            <div className={classes.headerArea}>
                <TextField
                    label="Para onde vais?"
                    onKeyUp={(e) => { if (e.keyCode === 13) getCordenates(e.target.value) }}
                    className={classes.searchAddressInput}
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
            </div>
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
