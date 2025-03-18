// import React from "react";
// import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
// import AppSettingsAltOutlinedIcon from "@mui/icons-material/AppSettingsAltOutlined";
// import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
// import WebOutlinedIcon from "@mui/icons-material/WebOutlined";

// interface MenuItemProps {
//   title: string;
//   icon?: React.JSX.Element;
//   onClick?: () => void;
//   subMenu?: MenuItemProps[];
// }

// const MenuItem: MenuItemProps[] = [
//   {
//     title: "Trang chủ",
//   },
//   {
//     title: "Calendar",
//     icon: <EventAvailableOutlinedIcon />,
//   },
//   {
//     title: "Admin Panel",
//     icon: <AdminPanelSettingsOutlinedIcon />,
//     subMenu: [
//       {
//         title: "Page Management",
//         icon: <WebOutlinedIcon />,
//       },
//       {
//         title: "App Settings",
//         icon: <AppSettingsAltOutlinedIcon />,
//       },
//     ],
//   },
// ];

// const ListMenuItem = () => {
//   return (
//     <>
//       {MenuItem.map((item, index) => {
//         return (
//           <>
//             <ListItemButton>
//               {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
//               <ListItemText primary={item.title} />
//             </ListItemButton>
//             {item.subMenu && (
//               <Collapse timeout="auto" unmountOnExit>
//                 <List component="div" disablePadding>
//                   {item.subMenu.map((subItem, subIndex) => (
//                     <ListItemButton key={subIndex}>
//                       <ListItemIcon>{subItem.icon}</ListItemIcon>
//                       <ListItemText primary={subItem.title} />
//                     </ListItemButton>
//                   ))}
//                 </List>
//               </Collapse>
//             )}
//           </>
//         );
//       })}
//     </>
//   );
// };

// export default ListMenuItem;
