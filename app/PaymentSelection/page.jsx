"use client";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
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
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const page = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const customer = [
    {
      SR: 1,
      MedicineName: "Medicine A",
      Batch: "12345",
      phoneno: +92000000000,
      Rate: 25.0,
      Discount: "5%",
    },
    {
      SR: 2,
      MedicineName: "Medicine B",
      Batch: "12345",
      phoneno: +92000000000,
      Rate: 25.0,
      Discount: "5%",
    },
    {
      SR: 3,
      MedicineName: "Medicine C",
      Batch: "12345",
      phoneno: +92000000000,
      Rate: 25.0,
      Discount: "5%",
    },
    {
      SR: 4,
      MedicineName: "Medicine D",
      Batch: "12345",
      phoneno: +92000000000,
      Rate: 25.0,
      Discount: "5%",
    },
    {
      SR: 5,
      MedicineName: "Medicine E",
      Batch: "24680",
      phoneno: +92000000000,
      Rate: 18.0,
      Discount: "3%",
    },
  ];

  return (
    <>
      <Flex direction="column">
        <Flex justifyContent="space-between" p="50px 64px" w="100%">
          <Flex>
            <Heading
              fontSize="40px"
              fontWeight="600"
              color="#32409A"
              letterSpacing="2.4px"
            >
              Payment Section
            </Heading>
          </Flex>
          <Flex justifyContent="center" gap="15px" alignItems="center">
            <Input
              p="5px"
              // w="180px"
              h="40px"
              borderRadius="7px"
              boxShadow="0px 1px 2px 0px rgba(0, 0, 0, 0.25)"
              type="date"
            />
            <Text>TO</Text>
            <Input
              p="5px"
              // w="180px"
              h="40px"
              borderRadius="7px"
              boxShadow="0px 1px 2px 0px rgba(0, 0, 0, 0.25)"
              type="date"
            />
          </Flex>
        </Flex>

        <Flex w="100%" justifyContent="center">
          <Table>
            <Thead>
              <Tr>
                <Th
                  borderTop="1px solid #E7E7E7"
                  borderBottom="1px solid #E7E7E7"
                  fontSize="14px"
                  fontWeight="400px"
                  color="#013134"
                >
                  SR
                </Th>
                <Th
                  borderTop="1px solid #E7E7E7"
                  borderBottom="1px solid #E7E7E7"
                  fontSize="14px"
                  fontWeight="400px"
                  color="#013134"
                >
                  Medicine Name
                </Th>
                <Th
                  borderTop="1px solid #E7E7E7"
                  borderBottom="1px solid #E7E7E7"
                  fontSize="14px"
                  fontWeight="400px"
                  color="#013134"
                >
                  Batch#
                </Th>
                <Th
                  borderTop="1px solid #E7E7E7"
                  borderBottom="1px solid #E7E7E7"
                  fontSize="14px"
                  fontWeight="400px"
                  color="#013134"
                >
                  Phone no.
                </Th>
                <Th
                  borderTop="1px solid #E7E7E7"
                  borderBottom="1px solid #E7E7E7"
                  fontSize="14px"
                  fontWeight="400px"
                  color="#013134"
                >
                  Rate
                </Th>
                <Th
                  borderTop="1px solid #E7E7E7"
                  borderBottom="1px solid #E7E7E7"
                  fontSize="14px"
                  fontWeight="400px"
                  color="#013134"
                >
                  Discount
                </Th>

                <Th
                  borderTop="1px solid #E7E7E7"
                  borderBottom="1px solid #E7E7E7"
                  fontSize="14px"
                  fontWeight="400px"
                  color="#013134"
                >
                  Actions
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {customer.map((data) => (
                <Tr key={data.id}>
                  <Td color="#000" fontSize="14px" fontWeight="400">
                    {" "}
                    {data.SR}
                  </Td>
                  <Td color="#000" fontSize="14px" fontWeight="400">
                    {data.MedicineName}
                  </Td>
                  <Td color="#000" fontSize="14px" fontWeight="400">
                    {data.Batch}
                  </Td>
                  <Td color="#000" fontSize="14px" fontWeight="400">
                    {data.phoneno}
                  </Td>
                  <Td color="#000" fontSize="14px" fontWeight="400">
                    {data.Rate}
                  </Td>
                  <Td color="#000" fontSize="14px" fontWeight="400">
                    {data.Discount}
                  </Td>

                  <Td>
                    {" "}
                    <Image src="/delete.svg" ml="25px" onClick={onOpen} />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Flex>

        <Flex
          m="50px 15px"
          borderTop="1px solid #32409A"
          borderBottom="1px solid #32409A"
          fontFamily="Inter"
          justifyContent="space-around"
        >
          <Flex gap="10px" alignItems="center">
            <Link href="/PaymentSelection/Total-payment">
              {" "}
              <Text fontSize="24px" fontWeight="700px">
                Total Sale
              </Text>{" "}
            </Link>
            <Text fontSize="20px" fontWeight="500px">
              23.3
            </Text>
          </Flex>
          <Flex gap="10px" alignItems="center">
            <Text fontSize="24px" fontWeight="700px">
              Total Purchase
            </Text>
            <Text fontSize="20px" fontWeight="500px">
              23.3
            </Text>
          </Flex>
          <Flex gap="10px" alignItems="center">
            <Text fontSize="24px" fontWeight="700px">
              Pending Payment
            </Text>
            <Text fontSize="20px" fontWeight="500px">
              23.3
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Customer
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={onClose} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default page;
