"use client";
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
      BatchNo: 21053,
      Name: "penadol",
      Price: "437",
      Quantity: 31,
      Discount: "10%",
      SingleProduct: 368,
      Rate: 22.35,
      Total: 10000,
    },
    {
      BatchNo: 21053,
      Name: "penadol",
      Price: "437",
      Quantity: 31,
      Discount: "10%",
      SingleProduct: 368,
      Rate: 22.35,
      Total: 10000,
    },
    {
      BatchNo: 21053,
      Name: "penadol",
      Price: "437",
      Quantity: 31,
      Discount: "10%",
      SingleProduct: 368,
      Rate: 22.35,
      Total: 10000,
    },
    {
      BatchNo: 21053,
      Name: "penadol",
      Price: "437",
      Quantity: 31,
      Discount: "10%",
      SingleProduct: 368,
      Rate: 22.35,
      Total: 10000,
    },
    {
      BatchNo: 21053,
      Name: "penadol",
      Price: "437",
      Quantity: 31,
      Discount: "10%",
      SingleProduct: 368,
      Rate: 22.35,
      Total: 10000,
    },
    {
      BatchNo: 21053,
      Name: "penadol",
      Price: "437",
      Quantity: 31,
      Discount: "10%",
      SingleProduct: 368,
      Rate: 22.35,
      Total: 10000,
    },
    {
      BatchNo: 21053,
      Name: "penadol",
      Price: "317",
      Quantity: 74,
      Discount: "10%",
      SingleProduct: 988,
      Rate: 22.35,
      Total: 10000,
    },
    {
      BatchNo: 21053,
      Name: "penadol",
      Price: "4737",
      Quantity: 311,
      Discount: "10%",
      SingleProduct: 38,
      Rate: 22.35,
      Total: 10000,
    },
    {
      BatchNo: 21053,
      Name: "penadol",
      Price: "437",
      Quantity: 31,
      Discount: "10%",
      SingleProduct: 368,
      Rate: 22.35,
      Total: 10000,
    },
    {
      BatchNo: 21053,
      Name: "penadol",
      Price: "717",
      Quantity: 221,
      Discount: "10%",
      SingleProduct: 767,
      Rate: 22.35,
      Total: 10000,
    },
    {
      BatchNo: 21053,
      Name: "penadol",
      Price: "171",
      Quantity: 54,
      Discount: "10%",
      SingleProduct: 987,
      Rate: 22.35,
      Total: 10000,
    },
    {
      BatchNo: 21053,
      Name: "penadol",
      Price: "213",
      Quantity: 11,
      Discount: "10%",
      SingleProduct: 118,
      Rate: 22.35,
      Total: 10000,
    },
    {
      BatchNo: 21053,
      Name: "penadol",
      Price: "132",
      Quantity: 34,
      Discount: "10%",
      SingleProduct: 887,
      Rate: 22.35,
      Total: 10000,
    },
    {
      BatchNo: 21053,
      Name: "penadol",
      Price: "777",
      Quantity: 91,
      Discount: "10%",
      SingleProduct: 668,
      Rate: 22.35,
      Total: 10000,
    },
    {
      BatchNo: 21053,
      Name: "penadol",
      Price: "345",
      Quantity: 21,
      Discount: "10%",
      SingleProduct: 399,
      Rate: 22.35,
      Total: 10000,
    },
    {
      BatchNo: 21053,
      Name: "penadol",
      Price: "123",
      Quantity: 61,
      Discount: "10%",
      SingleProduct: 128,
      Rate: 22.35,
      Total: 10000,
    },
  ];
  return (
    <>
      <Flex direction="column" /* w="100%" */>
        <Flex p="58px 74px" /* w="100%" */>
          <Heading
            fontSize="40px"
            fontWeight="600"
            color="#32409A"
            letterSpacing="2.4px"
          >
            Detail of Approved Payment
          </Heading>
        </Flex>
        <Flex minW="100%" justifyContent="center">
          <Table>
            <Thead>
              <Tr>
                <Th
                  borderTop="1px solid #E7E7E7"
                  borderBottom="1px solid #E7E7E7"
                  fontSize="10px"
                  fontWeight="600px"
                  color="#013134"
                >
                  Batch
                </Th>
                <Th
                  borderTop="1px solid #E7E7E7"
                  borderBottom="1px solid #E7E7E7"
                  fontSize="10px"
                  fontWeight="600px"
                  color="#013134"
                >
                  Name
                </Th>
                <Th
                  borderTop="1px solid #E7E7E7"
                  borderBottom="1px solid #E7E7E7"
                  fontSize="10px"
                  fontWeight="600px"
                  color="#013134"
                >
                  Price
                </Th>

                <Th
                  borderTop="1px solid #E7E7E7"
                  borderBottom="1px solid #E7E7E7"
                  fontSize="10px"
                  fontWeight="600px"
                  color="#013134"
                >
                  Quantity
                </Th>

                <Th
                  borderTop="1px solid #E7E7E7"
                  borderBottom="1px solid #E7E7E7"
                  fontSize="10px"
                  fontWeight="600px"
                  color="#013134"
                >
                  Discount
                </Th>
                <Th
                  borderTop="1px solid #E7E7E7"
                  borderBottom="1px solid #E7E7E7"
                  fontSize="10px"
                  fontWeight="600px"
                  color="#013134"
                >
                  Products
                </Th>
                <Th
                  borderTop="1px solid #E7E7E7"
                  borderBottom="1px solid #E7E7E7"
                  fontSize="10px"
                  fontWeight="600px"
                  color="#013134"
                >
                  Rate
                </Th>
                <Th
                  borderTop="1px solid #E7E7E7"
                  borderBottom="1px solid #E7E7E7"
                  fontSize="10px"
                  fontWeight="600px"
                  color="#013134"
                >
                  Total
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {dummy.map((data) => (
                <Tr key={data.id}>
                  <Td color="#000" fontSize="13px" fontWeight="300">
                    {data.BatchNo}
                  </Td>
                  <Td color="#000" fontSize="13px" fontWeight="300">
                    {data.Name}
                  </Td>
                  <Td color="#000" fontSize="13px" fontWeight="300">
                    {data.Price}
                  </Td>
                  <Td color="#000" fontSize="13px" fontWeight="300">
                    {data.Quantity}
                  </Td>
                  <Td color="#000" fontSize="13px" fontWeight="300">
                    {data.Discount}
                  </Td>

                  <Td color="#000" fontSize="13px" fontWeight="300">
                    {data.SingleProduct}
                  </Td>

                  <Td color="#000" fontSize="13px" fontWeight="300">
                    {data.Rate}
                  </Td>
                  <Td color="#000" fontSize="13px" fontWeight="300">
                    {data.Total}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Flex>
      </Flex>
    </>
  );
};

export default page;
