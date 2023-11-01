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
} from "@chakra-ui/react";
import React from "react";

const Nav = ({ onHamburgerClick }) => {
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
        <Image src="/logout.svg" alt="logout" />
      </Flex>
    </Flex>
  );
};

export default Nav;
