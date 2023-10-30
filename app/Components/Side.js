import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import "./style.css";

const Side = ({ isOpen }) => {
  return (
    <Flex
      h="100vh"
      minW="270px"
      bgColor="#32409A"
      direction="column"
      justifyContent="space-between"
      display={isOpen ? "block" : "none"}
    >
      <Heading
        color="white"
        letterSpacing="2.4px"
        textAlign="center"
        fontSize="24px"
        fontWeight="600"
        textShadow="0px 4px 4px rgba(0, 0, 0, 0.50)"
        m="25px"
      >
        Arsalan Business Portal
      </Heading>
      {/* <Flex direction="column" gap="200px"> */}
      <Flex gap="24px" justifyContent="center" mt="100px">
        <Image src="/sidebar.svg" />
        <Heading
          fontSize="20px"
          fontWeight="500"
          color="white"
          letterSpacing="2.4px"
        >
          Hi,
          <br />
          Arsalan
        </Heading>
      </Flex>

      <Flex
        direction="column"
        color="white"
        fontSize="20px"
        mt="100px"
        fontWeight="700"
      >
        <Link href="/Landing-dashboard">
          <Flex
            _hover={
              {
                // bgColor:
                //   location.pathname === "/Landing-dashboard"
                //     ? "#181F4D"
                //     : "#181F4D",
              }
            }
            // _hover={{ bgColor: "#181F4D" }}
            // bgColor={{}}
            // className={({ isActive }) => (isActive ? "active" : "link-color")}
            p="18px"
            direction="row"
            gap="23"
          >
            <Image src="/dashboard.svg" />
            <Text>Dashboard</Text>
          </Flex>
        </Link>
        <Link href="/Stock">
          <Flex
            _hover={{ bgColor: "#181F4D" }}
            // className={({ isActive }) => (isActive ? "active" : "link-color")}
            p="18px"
            direction="row"
            gap="23"
          >
            <Image src="/stock.svg" />
            <Text>Stock</Text>
          </Flex>
        </Link>
        <Link href="/CustomerScreen">
          <Flex
            _hover={{ bgColor: "#181F4D" }}
            // className={({ isActive }) => (isActive ? "active" : "link-color")}
            p="18px"
            direction="row"
            gap="23"
          >
            <Image src="/customer.svg" />
            <Text>Customer</Text>
          </Flex>
        </Link>
        <Link href="/InvoiceSelection">
          <Flex
            _hover={{ bgColor: "#181F4D" }}
            // className={({ isActive }) => (isActive ? "active" : "link-color")}
            p="18px"
            direction="row"
            gap="23"
          >
            <Image src="/invoice.svg" />
            <Text>Invoice</Text>
          </Flex>
        </Link>
        <Link href="/PaymentSelection">
          <Flex
            _hover={{ bgColor: "#181F4D" }}
            // className={({ isActive }) => (isActive ? "active" : "link-color")}
            p="18px"
            direction="row"
            gap="23"
          >
            <Image src="/payment.svg" />
            <Text>Payment</Text>
          </Flex>
        </Link>
      </Flex>
      <Flex mt="80px" justifyContent="center" alignItems="center" gap="40px">
        <Image src="/instagram.svg" />
        <Image src="/facebook.svg" />
        <Image src="/twitter.svg" />
      </Flex>
      {/* </Flex> */}
    </Flex>
  );
};

export default Side;
