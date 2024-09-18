import { Box, Drawer, List, } from '@mui/material';
import SidebarItems from './SidebarItems';

interface SidebarProps {
    isOpen: boolean,
    toggleDrawer: (isOpen: boolean) => void,
}

export default function Sidebar({ isOpen, toggleDrawer }: SidebarProps) {
    return <Drawer
        anchor="left"
        open={isOpen}
        onClose={() => toggleDrawer(false)}
    >
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => toggleDrawer(false)}
            onKeyDown={() => toggleDrawer(false)}
        >
            <List>
                <SidebarItems />
            </List>
        </Box>
    </Drawer>
}