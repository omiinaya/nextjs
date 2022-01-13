import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WorkIcon from '@mui/icons-material/Work';

export default function TemporaryDrawer(props) {
    const [state, setState] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) return
        setState(open);
    };

    const list = () => (
        <Box
            sx={{ width: "250px" }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {props.pages.map((text/*}, index*/) => (
                    <ListItem
                        button key={text}
                        onClick={
                            () => {
                                if (text != 'Home') {
                                    props.scrollTo(text, -150)
                                } else {
                                    props.scrollToTop()
                                }
                            }
                        }
                    >
                        <ListItemIcon>
                            <div>{text === 'Skills' ? <HomeRepairServiceIcon /> :
                                <div>{text === 'Certifications' ? <EmojiEventsIcon /> :
                                    <div>{text === 'Portfolio' ? <WorkIcon /> :
                                        <div>{text === 'Contact Me' ? <MailIcon /> : <HomeIcon />}</div>}
                                    </div>}
                                </div>}
                            </div>
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Box >
    );

    return (
        <div>
            <React.Fragment key={"left"}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={toggleDrawer(true)}
                    color="inherit"
                >
                    <MenuIcon />
                </IconButton>
                <Drawer anchor={"left"} open={state} onClose={toggleDrawer(false)}>
                    {list()}
                </Drawer>
            </React.Fragment>
        </div>
    );
}