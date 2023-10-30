import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import Side from "../Components/Side";
import Income from "./Components/Income";
import TopBuyer from "./Components/TopBuyer";
import Pending from "./Components/Pending";
import Recent from "./Components/Recent";

const page = () => {
  return (
    <>
      <Flex direction="column">
        <Heading
          // textShadow="0px 4px 4px rgba(0, 0, 0, 0.50)"
          fontSize="40px"
          fontWeight="600"
          color="#32409A"
          letterSpacing="2.4px"
          p="18px"
        >
          Distributor Dashboard
        </Heading>
      </Flex>
      <Flex m="15px" gap="3" direction="column">
        <Flex gap="25px" justifyContent="center" flexWrap="wrap">
          <Income />
          <TopBuyer />
        </Flex>
        <Flex justifyContent="center" flexWrap="wrap" gap="20px " w="100%">
          <Pending />
          <Recent />
        </Flex>
      </Flex>
    </>
  );
};

export default page;
