"use client";
import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Nav = ({ onHamburgerClick }) => {
  const handleLogout = () => {
    localStorage.removeItem("token");
  };
  return (
    <Flex /* bgColor="lightgray" */ p="20px 76px">
      <Flex justifyContent="space-between" w="100%">
        <HamburgerIcon
          color="#32409A"
          boxSize="10"
          onClick={onHamburgerClick}
        />

        <InputGroup maxW="476px" m="0px 20px">
          <Input
            h="50px"
            borderRadius="12px"
            bgColor="#F7F7F7"
            boxShadow="0px 1px 2px 0px rgba(0, 0, 0, 0.25)"
            p="15px 34px"
            placeholder="Search . . ."
            alignItems="center"
            justifyContent="center"
          />
          <InputRightElement>
            <SearchIcon boxSize="5" mt="7px" color="#32409A" />
          </InputRightElement>
        </InputGroup>

        <Flex>
          <Menu>
            <MenuButton
              as={Button}
              colorScheme="blue"
              boxShadow="0px 1px 2px 0px rgba(0, 0, 0, 0.25)"
            >
              Profile
            </MenuButton>
            <MenuList>
              <MenuGroup title="Profile">
                <MenuItem>My Account</MenuItem>
                <MenuItem>Payments </MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup title="Help">
                <MenuItem>Docs</MenuItem>
                <MenuItem>FAQ</MenuItem>
                <Link href="/">
                  {" "}
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Link>
              </MenuGroup>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
      {/* <Image src="/logout.svg" alt="logout" /> */}
    </Flex>
  );
};

export default Nav;
