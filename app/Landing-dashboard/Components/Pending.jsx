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

const Pending = () => {
  return (
    <>
      <TableContainer borderRadius="8" minW="550px" border="1px solid #DADADA">
        <Table>
          <Thead>
            <Tr>
              <Th>
                {" "}
                <Flex alignItems="center">
                  <Image m=" 5px" src="/pendingpurple.svg" />{" "}
                  <Text>Pending Amount</Text>
                </Flex>
              </Th>
            </Tr>
          </Thead>

          <Tbody fontSize="20px" fontWeight="500" color="#434343">
            <Tr>
              <Th>Invoice no</Th>
              <Th>Customer Name</Th>
              <Th>Price</Th>
            </Tr>
            <Tr>
              <Td>21053</Td>
              <Td> Omar Korsgaard</Td>
              <Td>473</Td>
            </Tr>
            <Tr>
              <Td>21053</Td>
              <Td> Gustavo Franci</Td>
              <Td>240</Td>
            </Tr>
            <Tr>
              <Td>21053</Td>
              <Td> Cooper Curtis</Td>
              <Td>493</Td>
            </Tr>
            <Tr>
              <Td>21053</Td>
              <Td> Chance Bator</Td>
              <Td>224</Td>
            </Tr>
            <Tr>
              <Td>21053</Td>
              <Td> Justin Curtis</Td>
              <Td>473</Td>
            </Tr>
            <Tr>
              <Td>21053</Td>
              <Td> Kadin Bator</Td>
              <Td>659</Td>
            </Tr>
            <Tr>
              <Td>21053</Td>
              <Td> Jakob Dias</Td>
              <Td>196</Td>
            </Tr>{" "}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Pending;
