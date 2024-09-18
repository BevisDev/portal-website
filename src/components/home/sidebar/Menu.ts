interface MenuItem {
  label: string;
  icon: React.ReactNode;
  subMenu?: MenuItem[];
}

// export const Menu: MenuItem[] = [
//     {
//         label: 'Trang chủ',
//         icon: <HomeIcon />,
//       },
//       {
//         label: 'Giới thiệu',
//         icon: <InfoIcon />,
//       },
//       {
//         label: 'Sản phẩm',
//         icon: <ShoppingCartIcon />,
//       },
//       {
//         label: 'Dịch vụ',
//         icon: <BusinessIcon />,
//         subMenu: [
//           {
//             label: 'Tư vấn',
//             icon: <HelpOutlineIcon />,
//           },
//           {
//             label: 'Bảo hành',
//             icon: <SecurityIcon />,
//           },
//         ],
//       },
//       {
//         label: 'Liên hệ',
//         icon: <ContactMailIcon />,
//       },
// ];
