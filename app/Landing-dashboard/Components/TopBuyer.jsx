"use client";

import {
  TableContainer,
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";

const TopBuyer = () => {
  return (
    <TableContainer maxW="320px" borderRadius="8" border="1px solid #DADADA">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>
              {" "}
              <Flex gap="8px" alignItems="center">
                <Image src="/topbuyer.svg" />{" "}
                <Text>Top Buyer of the month</Text>
              </Flex>
            </Th>
          </Tr>
        </Thead>

        <Tbody fontSize="14px" fontWeight="500" color="#434343">
          <Tr>
            <Td>Nolan Bator</Td>
            <Td isNumeric>473</Td>
          </Tr>
          <Tr>
            <Td>Craig Philips</Td>
            <Td isNumeric>240</Td>
          </Tr>
          <Tr>
            <Td>Charlie Saris</Td>
            <Td isNumeric>493</Td>
          </Tr>
          <Tr>
            <Td>Zain Lipshutzr</Td>
            <Td isNumeric>224</Td>
          </Tr>
          <Tr>
            <Td>Gustavo Lipshutz</Td>
            <Td isNumeric>659</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TopBuyer;
