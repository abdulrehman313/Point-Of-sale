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

const Income = () => {
  return (
    <>
      <Flex gap="17px" h="300px">
        <TableContainer
          borderRadius="8"
          border="1px solid #DADADA"
          maxW="265px"
        >
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>
                  {" "}
                  <Flex alignItems="center">
                    <Image m="5px" src="/income.svg" />{" "}
                    <Text fontSize="16px" fontWeight="600">
                      Income
                    </Text>
                  </Flex>
                </Th>
              </Tr>
            </Thead>

            <Tbody /* p="60px 48px" */>
              <Tr>
                <Flex p="30px 24px">
                  <Td borderBottom="none">
                    <Flex direction="column" gap="7">
                      <Text color="#00833E" fontSize="24px" fontWeight="600">
                        Monthly{" "}
                      </Text>
                      <Text fontSize="24px" fontWeight="600">
                        Rs.1,00,000
                      </Text>
                    </Flex>
                  </Td>
                </Flex>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <TableContainer
          maxW="265px"
          borderRadius="8"
          border="1px solid #DADADA"
        >
          <Table>
            <Thead>
              <Tr>
                <Th>
                  {" "}
                  <Flex alignItems="center">
                    <Image src="/pending.svg" m="5px" />{" "}
                    <Text fontSize="16px" fontWeight="600">
                      Pending Amount
                    </Text>
                  </Flex>
                </Th>
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Flex p="30px 0px">
                  <Td borderBottom="none">
                    <Flex direction="column" gap="7 " textAlign="center">
                      <Text color="Red" fontSize="24px" fontWeight="600">
                        Pending Amount
                      </Text>
                      <Text fontSize="24px" fontWeight="600">
                        Rs.1,00,000
                      </Text>
                    </Flex>
                  </Td>
                </Flex>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </>
  );
};

export default Income;
