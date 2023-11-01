"use client";
import {
  Flex,
  Heading,
  Image,
  Input,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const page = () => {
  const dummy = [
    {
      SR: 1,
      MedicineName: "Medicine A",
      Batch: "12345",
      phoneno: +9200000000000,
      Rate: 25.0,
      Discount: "5%",
    },
    {
      SR: 2,
      MedicineName: "Medicine B",
      Batch: "12345",
      phoneno: +9200000000000,
      Rate: 25.0,
      Discount: "5%",
    },
    {
      SR: 3,
      MedicineName: "Medicine C",
      Batch: "12345",
      phoneno: +9200000000000,
      Rate: 25.0,
      Discount: "5%",
    },
    {
      SR: 4,
      MedicineName: "Medicine D",
      Batch: "12345",
      phoneno: +9200000000000,
      Rate: 25.0,
      Discount: "5%",
    },
    {
      SR: 5,
      MedicineName: "Medicine E",
      Batch: "24680",
      phoneno: +9200000000000,
      Rate: 18.0,
      Discount: "3%",
    },
    {
      SR: 3,
      MedicineName: "Medicine C",
      Batch: "12345",
      phoneno: +9200000000000,
      Rate: 25.0,
      Discount: "5%",
    },
    {
      SR: 4,
      MedicineName: "Medicine D",
      Batch: "12345",
      phoneno: +9200000000000,
      Rate: 25.0,
      Discount: "5%",
    },
    {
      SR: 5,
      MedicineName: "Medicine E",
      Batch: "24680",
      phoneno: +9200000000000,
      Rate: 18.0,
      Discount: "3%",
    },
    {
      SR: 3,
      MedicineName: "Medicine C",
      Batch: "12345",
      phoneno: +9200000000000,
      Rate: 25.0,
      Discount: "5%",
    },
    {
      SR: 4,
      MedicineName: "Medicine D",
      Batch: "12345",
      phoneno: +9200000000000,
      Rate: 25.0,
      Discount: "5%",
    },
    {
      SR: 5,
      MedicineName: "Medicine E",
      Batch: "24680",
      phoneno: +9200000000000,
      Rate: 18.0,
      Discount: "3%",
    },
    {
      SR: 3,
      MedicineName: "Medicine C",
      Batch: "12345",
      phoneno: +9200000000000,
      Rate: 25.0,
      Discount: "5%",
    },
    {
      SR: 4,
      MedicineName: "Medicine D",
      Batch: "12345",
      phoneno: +9200000000000,
      Rate: 25.0,
      Discount: "5%",
    },
    {
      SR: 5,
      MedicineName: "Medicine E",
      Batch: "24680",
      phoneno: +9200000000000,
      Rate: 18.0,
      Discount: "3%",
    },
  ];
  return (
    <>
      <Flex direction="column" p="58px 74px" w="100%">
        <Flex justifyContent="space-between" w="100%">
          <Flex>
            <Heading
              fontSize="40px"
              fontWeight="600"
              color="#32409A"
              letterSpacing="2.4px"
            >
              All Customer History
            </Heading>
          </Flex>
          <Flex justifyContent="center" gap="15px" alignItems="center">
            <Input
              p="5px"
              w="180px"
              h="40px"
              borderRadius="7px"
              boxShadow="0px 1px 2px 0px rgba(0, 0, 0, 0.25)"
              type="date"
            />
            <Text>TO</Text>
            <Input
              p="5px"
              w="180px"
              h="40px"
              borderRadius="7px"
              boxShadow="0px 1px 2px 0px rgba(0, 0, 0, 0.25)"
              type="date"
            />
          </Flex>
        </Flex>
        <Flex m="20px ">
          <TableContainer w="100%">
            <Table variant="striped" w="100%" h="auto">
              <Thead mb="10px">
                <Tr>
                  <Th
                    borderTop="1px solid #E7E7E7"
                    borderBottom="1px solid #E7E7E7"
                    fontSize="24px"
                    fontWeight="600px"
                    color="#013134"
                    fontStyle="normal"
                    lineHeight="24.018px"
                  >
                    SR.
                  </Th>
                  <Th
                    borderTop="1px solid #E7E7E7"
                    borderBottom="1px solid #E7E7E7"
                    fontSize="24px"
                    fontWeight="600px"
                    color="#013134"
                    fontStyle="normal"
                    lineHeight="24.018px"
                  >
                    Medicine Name
                  </Th>
                  <Th
                    borderTop="1px solid #E7E7E7"
                    borderBottom="1px solid #E7E7E7"
                    fontSize="24px"
                    fontWeight="600px"
                    color="#013134"
                    fontStyle="normal"
                    lineHeight="24.018px"
                  >
                    Batch #
                  </Th>
                  <Th
                    borderTop="1px solid #E7E7E7"
                    borderBottom="1px solid #E7E7E7"
                    fontSize="24px"
                    fontWeight="600px"
                    color="#013134"
                    fontStyle="normal"
                    lineHeight="24.018px"
                  >
                    Phone no.
                  </Th>
                  <Th
                    borderTop="1px solid #E7E7E7"
                    borderBottom="1px solid #E7E7E7"
                    fontSize="24px"
                    fontWeight="600px"
                    color="#013134"
                    fontStyle="normal"
                    lineHeight="24.018px"
                  >
                    Rate
                  </Th>
                  <Th
                    borderTop="1px solid #E7E7E7"
                    borderBottom="1px solid #E7E7E7"
                    fontSize="24px"
                    fontWeight="600px"
                    color="#013134"
                    fontStyle="normal"
                    lineHeight="24.018px"
                  >
                    Discount
                  </Th>
                  <Th
                    borderTop="1px solid #E7E7E7"
                    borderBottom="1px solid #E7E7E7"
                    fontSize="24px"
                    fontWeight="600px"
                    color="#013134"
                    fontStyle="normal"
                    lineHeight="24.018px"
                  >
                    Actions
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {dummy.map((data) => (
                  <Tr
                    borderBottom="1px solid #E7E7E7"
                    key={data.id}
                    height="40px"
                  >
                    <Td
                      color="#000"
                      fontSize="16px"
                      fontStyle="normal"
                      fontWeight="500"
                      lineHeight="24.018px"
                      textAlign="center"
                    >
                      {data.SR}
                    </Td>
                    <Td
                      color="#000"
                      fontSize="16px"
                      fontStyle="normal"
                      fontWeight="500"
                      lineHeight="24.018px"
                      textAlign="center"
                    >
                      {data.MedicineName}
                    </Td>
                    <Td
                      color="#000"
                      fontSize="16px"
                      fontStyle="normal"
                      fontWeight="500"
                      lineHeight="24.018px"
                      textAlign="center"
                    >
                      {data.Batch}
                    </Td>
                    <Td
                      color="#000"
                      fontSize="16px"
                      fontStyle="normal"
                      fontWeight="500"
                      lineHeight="24.018px"
                      textAlign="center"
                    >
                      {data.phoneno}
                    </Td>
                    <Td
                      color="#000"
                      fontSize="16px"
                      fontStyle="normal"
                      fontWeight="500"
                      lineHeight="24.018px"
                      textAlign="center"
                    >
                      {data.Rate}
                    </Td>
                    <Td
                      color="#000"
                      fontSize="16px"
                      fontStyle="normal"
                      fontWeight="500"
                      lineHeight="24.018px"
                      textAlign="center"
                    >
                      {data.Discount}
                    </Td>

                    <Td>
                      <Flex justifyContent="center" alignItems="center">
                        {" "}
                        <Link href="/Stock/Delete-stock">
                          <Image src="/delete.svg" />
                        </Link>{" "}
                      </Flex>{" "}
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>
        <Flex
          // fontSize="24px"
          // fontWeight="600px"
          fontFamily="Inter"
          justifyContent="space-around"
          // alignItems="center"
        >
          <Flex gap="10px" alignItems="center">
            <Link href="/PaymentSelection/Total-payment">
              {" "}
              <Text fontSize="24px" fontWeight="600px">
                Total Sale
              </Text>{" "}
            </Link>
            <Text fontSize="20px" fontWeight="500px">
              23.3
            </Text>
          </Flex>
          <Flex gap="10px" alignItems="center">
            <Text fontSize="24px" fontWeight="600px">
              Total Purchase
            </Text>
            <Text fontSize="20px" fontWeight="500px">
              23.3
            </Text>
          </Flex>
          <Flex gap="10px" alignItems="center">
            <Text fontSize="24px" fontWeight="600px">
              Pending Payment
            </Text>
            <Text fontSize="20px" fontWeight="500px">
              23.3
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default page;
