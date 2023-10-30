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

const Recent = () => {
  return (
    <>
      <TableContainer
        /* mt="20px" */ borderRadius="8"
        border="1px solid #DADADA"
      >
        <Table>
          <Thead>
            <Tr>
              <Th>
                {" "}
                <Flex gap="8px" alignItems="center">
                  <Image src="/recent.svg" /> <Text>Recent Activiy</Text>
                </Flex>
              </Th>
            </Tr>
          </Thead>

          <Tbody fontSize="20px" fontWeight="500">
            <Tr>
              <Flex justifyContent="space-between">
                <Flex direction="column">
                  <Td>
                    Payment Receive <br />
                    <span
                      style={{
                        fontSize: "10px",
                        fontWeight: "500",
                        color: "#818181 ",
                      }}
                    >
                      {" "}
                      By: 34324245
                    </span>
                  </Td>
                </Flex>
                <Flex>
                  <Td>
                    {" "}
                    <Image src="/red.svg" />{" "}
                  </Td>
                </Flex>
              </Flex>
            </Tr>
            <Tr>
              <Flex justifyContent="space-between">
                <Flex direction="column">
                  <Td>
                    Pending Amount <br />
                    <span
                      style={{
                        fontSize: "10px",
                        fontWeight: "500",
                        color: "#818181 ",
                      }}
                    >
                      {" "}
                      By: 34324245
                    </span>
                  </Td>
                </Flex>
                <Flex>
                  <Td>
                    {" "}
                    <Image src="/green.svg" />{" "}
                  </Td>
                </Flex>
              </Flex>
            </Tr>
            <Tr>
              <Flex justifyContent="space-between">
                <Flex direction="column">
                  <Td>
                    Cash Deposit <br />
                    <span
                      style={{
                        fontSize: "10px",
                        fontWeight: "500",
                        color: "#818181 ",
                      }}
                    >
                      {" "}
                      By: 34324245
                    </span>{" "}
                  </Td>
                </Flex>
                <Flex>
                  <Td>
                    {" "}
                    <Image src="/blue.svg" />{" "}
                  </Td>
                </Flex>
              </Flex>
            </Tr>
            <Tr>
              <Flex justifyContent="space-between">
                <Flex direction="column">
                  <Td>
                    Cash Withdraw <br />
                    <span
                      style={{
                        fontSize: "10px",
                        fontWeight: "500",
                        color: "#818181 ",
                      }}
                    >
                      {" "}
                      By: 34324245
                    </span>{" "}
                  </Td>
                </Flex>
                <Flex>
                  <Td>
                    {" "}
                    <Image src="/red.svg" />{" "}
                  </Td>
                </Flex>
              </Flex>
            </Tr>
            <Tr>
              <Flex justifyContent="space-between">
                <Flex direction="column">
                  <Td>
                    Cash deliver <br />
                    <span
                      style={{
                        fontSize: "10px",
                        fontWeight: "500",
                        color: "#818181 ",
                      }}
                    >
                      {" "}
                      By: 34324245
                    </span>
                  </Td>
                </Flex>
                <Flex>
                  <Td>
                    {" "}
                    <Image src="/green.svg" />{" "}
                  </Td>
                </Flex>
              </Flex>
            </Tr>
            <Tr>
              <Flex justifyContent="space-between">
                <Flex direction="column">
                  <Td>
                    Cash reject <br />
                    <span
                      style={{
                        fontSize: "10px",
                        fontWeight: "500",
                        color: "#818181 ",
                      }}
                    >
                      {" "}
                      By: 34324245
                    </span>
                  </Td>
                </Flex>
                <Flex>
                  <Td>
                    {" "}
                    <Image src="/blue.svg" />{" "}
                  </Td>
                </Flex>
              </Flex>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Recent;
