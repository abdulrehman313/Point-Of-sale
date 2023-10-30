"use client";
import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import Side from "../Components/Side";
import { usePathname } from "next/navigation";
import Nav from "../Components/Nav";

const SIDEBAR = ({ children }) => {
  const pathname = usePathname();
  const loginRoute = pathname === "/";
  const signInRoute = pathname === "/Sign-up";
  const logRoute = pathname === "/Login";

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Flex w="100%">
      {!loginRoute && !signInRoute && !logRoute && (
        <Side isOpen={isSidebarOpen} />
      )}
      <Flex direction="column" w="full" maxH="100vh">
        {/* <Nav /> */}
        {!loginRoute && !signInRoute && !logRoute && (
          <Nav onHamburgerClick={toggleSidebar} />
        )}
        {/* Nav bar */}
        <Flex
          direction="column"
          w="full"
          /* maxH="100vh" */ /*  maxW="95vh" */ overflowY="scroll"
        >
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SIDEBAR;
