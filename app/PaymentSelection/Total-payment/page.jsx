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
      CustomerName: "Clinix medical store",
      Invoiceno: "21053",
      Phoneno: +9200000000000,
      Grosstotal: 1000,
      Status: "Accpeted",
      Date: "22-02-2023",
    },
    {
      SR: 2,
      CustomerName: "Clinix medical store",
      Invoiceno: "21053",
      Phoneno: +9200000000000,
      Grosstotal: 1000,
      Status: "Accpeted",
      Date: "22-02-2023",
    },
    {
      SR: 3,
      CustomerName: "Clinix medical store",
      Invoiceno: "21053",
      Phoneno: +9200000000000,
      Grosstotal: 1000,
      Status: "Accpeted",
      Date: "22-02-2023",
    },
    {
      SR: 4,
      CustomerName: "Clinix medical store",
      Invoiceno: "21053",
      Phoneno: +9200000000000,
      Grosstotal: 1000,
      Status: "Accpeted",
      Date: "22-02-2023",
    },
    {
      SR: 5,
      CustomerName: "Clinix medical store",
      Invoiceno: "21053",
      Phoneno: +9200000000000,
      Grosstotal: 1000,
      Status: "Accpeted",
      Date: "22-02-2023",
    },
    {
      SR: 3,
      CustomerName: "Clinix medical store",
      Invoiceno: "21053",
      Phoneno: +9200000000000,
      Grosstotal: 1000,
      Status: "Accpeted",
      Date: "22-02-2023",
    },
    {
      SR: 4,
      CustomerName: "Clinix medical store",
      Invoiceno: "21053",
      Phoneno: +9200000000000,
      Grosstotal: 1000,
      Status: "Accpeted",
      Date: "22-02-2023",
    },
    {
      SR: 5,
      CustomerName: "Clinix medical store",
      Invoiceno: "21053",
      Phoneno: +9200000000000,
      Grosstotal: 1000,
      Status: "Accpeted",
      Date: "22-02-2023",
    },
    {
      SR: 3,
      CustomerName: "Clinix medical store",
      Invoiceno: "21053",
      Phoneno: +9200000000000,
      Grosstotal: 1000,
      Status: "Accpeted",
      Date: "22-02-2023",
    },
    {
      SR: 4,
      CustomerName: "Clinix medical store",
      Invoiceno: "21053",
      Phoneno: +9200000000000,
      Grosstotal: 1000,
      Status: "Accpeted",
      Date: "22-02-2023",
    },
    {
      SR: 5,
      CustomerName: "Clinix medical store",
      Invoiceno: "21053",
      Phoneno: +9200000000000,
      Grosstotal: 1000,
      Status: "Accpeted",
      Date: "22-02-2023",
    },
  ];
  return (
    <>
      <Flex direction="column" w="100%">
        <Flex justifyContent="space-between" p="58px 54px" w="100%">
          <Flex>
            <Heading
              fontSize="40px"
              fontWeight="600"
              color="#32409A"
              letterSpacing="2.4px"
            >
              Total Payment
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
        <Flex justifyContent="center">
          <Table variant="striped">
            <Thead>
              <Tr>
                <Th
                  borderTop="1px solid #E7E7E7"
                  borderBottom="1px solid #E7E7E7"
                  fontSize="15px"
                  fontWeight="600px"
                  color="#013134"
                >
                  SR.
                </Th>
                <Th
                  borderTop="1px solid #E7E7E7"
                  borderBottom="1px solid #E7E7E7"
                  fontSize="15px"
                  fontWeight="600px"
                  color="#013134"
                  fontStyle="normal"
                  lineHeight="24.018px"
                >
                  Customer Name
                </Th>
                <Th
                  borderTop="1px solid #E7E7E7"
                  borderBottom="1px solid #E7E7E7"
                  fontSize="15px"
                  fontWeight="600px"
                  color="#013134"
                  fontStyle="normal"
                  lineHeight="24.018px"
                >
                  Invoice No #
                </Th>
                <Th
                  borderTop="1px solid #E7E7E7"
                  borderBottom="1px solid #E7E7E7"
                  fontSize="15px"
                  fontWeight="600px"
                  color="#013134"
                  fontStyle="normal"
                  lineHeight="24.018px"
                >
                  Gross total
                </Th>
                <Th
                  borderTop="1px solid #E7E7E7"
                  borderBottom="1px solid #E7E7E7"
                  fontSize="15px"
                  fontWeight="600px"
                  color="#013134"
                  fontStyle="normal"
                  lineHeight="24.018px"
                >
                  Status
                </Th>
                <Th
                  borderTop="1px solid #E7E7E7"
                  borderBottom="1px solid #E7E7E7"
                  fontSize="15px"
                  fontWeight="600px"
                  color="#013134"
                  fontStyle="normal"
                  lineHeight="24.018px"
                >
                  Date
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {dummy.map((data) => (
                <Tr borderBottom="1px solid #E7E7E7" key={data.id}>
                  <Td
                    color="#000"
                    fontSize="15px"
                    fontStyle="normal"
                    fontWeight="400"
                  >
                    {data.SR}
                  </Td>
                  <Td
                    color="#000"
                    fontSize="15px"
                    fontStyle="normal"
                    fontWeight="400"
                  >
                    {data.CustomerName}
                  </Td>
                  <Td
                    color="#000"
                    fontSize="15px"
                    fontStyle="normal"
                    fontWeight="400"
                  >
                    {data.Invoiceno}
                  </Td>
                  <Td
                    color="#000"
                    fontSize="15px"
                    fontStyle="normal"
                    fontWeight="400"
                  >
                    {data.Grosstotal}
                  </Td>
                  <Td
                    color="#000"
                    fontSize="15px"
                    fontStyle="normal"
                    fontWeight="400"
                  >
                    {data.Status}
                  </Td>
                  <Td
                    color="#000"
                    fontSize="15px"
                    fontStyle="normal"
                    fontWeight="400"
                  >
                    {data.Date}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Flex>
        <Flex justifyContent="flex-end ">
          <Flex
            justifyContent="flex-end"
            m="44px"
            direction="column"
            gap="36px"
          >
            <Link href="/PaymentSelection/Approved-payment">
              <Heading fontSize="20px" fontWeight="600px">
                Total Sales
              </Heading>
            </Link>
            <Heading fontSize="20px" fontWeight="600px">
              Pending Amount
            </Heading>
            <Heading fontSize="20px" fontWeight="600px">
              Inventory Worth
            </Heading>
          </Flex>
          <Flex
            justifyContent="flex-end"
            m="44px"
            direction="column"
            gap="36px"
            color="#373737"
            fontSize="15px"
            fontWeight="400px"
          >
            <Heading fontSize="20px" fontWeight="600px">
              3500
            </Heading>
            <Heading fontSize="20px" fontWeight="600px">
              3500
            </Heading>
            <Heading fontSize="20px" fontWeight="600px">
              5000
            </Heading>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default page;
