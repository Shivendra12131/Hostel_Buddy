import React, { useEffect, useState } from "react";
import { Profile } from "../components/Dashboard/Profile";
import { Lending } from "../components/Dashboard/Lending";
import { Borrow } from "../components/Dashboard/Borrow";
import { useLocation } from 'react-router-dom';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  UserCircleIcon,
  
} from "@heroicons/react/24/solid";
 
const Accounts = () => {
  const location = useLocation();
  const { value } = location.state || 'profile';
  const data = [
    {
      label: "Profile",
      value: "profile",
      icon: UserCircleIcon,
      component: <Profile />,
    },
    {
      label: "Borrow",
      value: "borrow",
      icon: Square3Stack3DIcon,
      component: <Borrow />,
    },
    {
      label: "Lending",
      value: "lending",
      icon: Square3Stack3DIcon,
      component: <Lending />,
    },
  ];

  return (
    <Tabs value={value}>
      <TabsHeader className="mt-3 ml-3">
        {data.map(({ label, value, icon }) => (
          <Tab key={value} value={value}>
            <div className="flex items-center gap-2">
              {React.createElement(icon, { className: "w-5 h-5" })}
              {label}
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, component }) => (
          <TabPanel key={value} value={value}>
            {component}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
};

export default Accounts;
