import {
  Button,
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
      Grandtotal: 1000,
      Status: "Accpeted",
      Date: "22-02-2023",
    },
    {
      SR: 2,
      CustomerName: "Clinix medical store",
      Invoiceno: "21053",
      Phoneno: +9200000000000,
      Grandtotal: 1000,
      Status: "Accpeted",
      Date: "22-02-2023",
    },
    {
      SR: 3,
      CustomerName: "Clinix medical store",
      Invoiceno: "21053",
      Phoneno: +9200000000000,
      Grandtotal: 1000,
      Status: "Accpeted",
      Date: "22-02-2023",
    },
    {
      SR: 4,
      CustomerName: "Clinix medical store",
      Invoiceno: "21053",
      Phoneno: +9200000000000,
      Grandtotal: 1000,
      Status: "Accpeted",
      Date: "22-02-2023",
    },
    {
      SR: 5,
      CustomerName: "Clinix medical store",
      Invoiceno: "21053",
      Phoneno: +9200000000000,
      Grandtotal: 1000,
      Status: "Accpeted",
      Date: "22-02-2023",
    },
    {
      SR: 3,
      CustomerName: "Clinix medical store",
      Invoiceno: "21053",
      Phoneno: +9200000000000,
      Grandtotal: 1000,
      Status: "Accpeted",
      Date: "22-02-2023",
    },
    {
      SR: 4,
      CustomerName: "Clinix medical store",
      Invoiceno: "21053",
      Phoneno: +9200000000000,
      Grandtotal: 1000,
      Status: "Accpeted",
      Date: "22-02-2023",
    },
    {
      SR: 5,
      CustomerName: "Clinix medical store",
      Invoiceno: "21053",
      Phoneno: +9200000000000,
      Grandtotal: 1000,
      Status: "Accpeted",
      Date: "22-02-2023",
    },
    {
      SR: 3,
      CustomerName: "Clinix medical store",
      Invoiceno: "21053",
      Phoneno: +9200000000000,
      Grandtotal: 1000,
      Status: "Accpeted",
      Date: "22-02-2023",
    },
    {
      SR: 4,
      CustomerName: "Clinix medical store",
      Invoiceno: "21053",
      Phoneno: +9200000000000,
      Grandtotal: 1000,
      Status: "Accpeted",
      Date: "22-02-2023",
    },
    {
      SR: 5,
      CustomerName: "Clinix medical store",
      Invoiceno: "21053",
      Phoneno: +9200000000000,
      Grandtotal: 1000,
      Status: "Accpeted",
      Date: "22-02-2023",
    },
  ];
  return (
    <>
      <Flex direction="column" w="100%">
        <Flex w="100%">
          <Flex p="58px 74px">
            <Heading
              fontSize="40px"
              fontWeight="600"
              color="#32409A"
              letterSpacing="2.4px"
            >
              Approved Payments
            </Heading>
          </Flex>
        </Flex>
        <Flex>
          <TableContainer w="100%">
            <Table variant="striped" w="100%" h="auto">
              <Thead mb="10px">
                <Tr>
                  <Th
                    borderTop="1px solid #E7E7E7"
                    borderBottom="1px solid #E7E7E7"
                    fontSize="16px"
                    fontWeight="600px"
                    color="#013134"
                  >
                    Invoice No #
                  </Th>
                  <Th
                    borderTop="1px solid #E7E7E7"
                    borderBottom="1px solid #E7E7E7"
                    fontSize="16px"
                    fontWeight="600px"
                    color="#013134"
                  >
                    Date
                  </Th>
                  <Th
                    borderTop="1px solid #E7E7E7"
                    borderBottom="1px solid #E7E7E7"
                    fontSize="16px"
                    fontWeight="600px"
                    color="#013134"
                  >
                    Status
                  </Th>

                  <Th
                    borderTop="1px solid #E7E7E7"
                    borderBottom="1px solid #E7E7E7"
                    fontSize="16px"
                    fontWeight="600px"
                    color="#013134"
                  >
                    Grand Total
                  </Th>

                  <Th
                    borderTop="1px solid #E7E7E7"
                    borderBottom="1px solid #E7E7E7"
                    fontSize="16px"
                    fontWeight="600px"
                    color="#013134"
                  >
                    Detail
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {dummy.map((data) => (
                  <Tr borderBottom="1px solid #E7E7E7" key={data.id}>
                    <Td
                      color="#000"
                      fontSize="16px"
                      fontStyle="normal"
                      fontWeight="500"
                    >
                      {data.Invoiceno}
                    </Td>
                    <Td
                      color="#000"
                      fontSize="16px"
                      fontStyle="normal"
                      fontWeight="500"
                    >
                      {data.Date}
                    </Td>
                    <Td
                      color="#000"
                      fontSize="16px"
                      fontStyle="normal"
                      fontWeight="500"
                    >
                      {data.Status}
                    </Td>
                    <Td
                      color="#000"
                      fontSize="16px"
                      fontStyle="normal"
                      fontWeight="500"
                    >
                      {data.Grandtotal}
                    </Td>
                    <Td>
                      <Flex>
                        <Link href="/PaymentSelection/Details-payment">
                          <Button
                            // m="10px"
                            bgColor="#28337D"
                            color="white"
                            w="75px"
                            h="35px"
                            fontWeight="400"
                            fontSize="18px"
                            borderRadius="15px"
                          >
                            Detail
                          </Button>{" "}
                        </Link>
                      </Flex>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>
      </Flex>
    </>
  );
};

export default page;
