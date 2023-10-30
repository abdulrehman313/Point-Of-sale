"use client";
import {
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";

import Link from "next/link";
import React from "react";

const page = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const customer = [
    {
      SR: 1,
      Name: "Zain",
      Batch: 4358,
      Qty: 772,
      CP: 830,
      SP: 0.91444,
    },
    {
      SR: 2,
      Name: "Qasim",
      Batch: 4358,
      Qty: 772,
      CP: 830,
      SP: 0.91444,
    },
    {
      SR: 3,
      Name: "awan",
      Batch: 4358,
      Qty: 772,
      CP: 830,
      SP: 0.91444,
    },
    {
      SR: 4,
      Name: "saad",
      Batch: 4358,
      Qty: 772,
      CP: 830,
      SP: 0.91444,
    },
    {
      SR: 5,
      Name: "ali",
      Batch: 4358,
      Qty: 772,
      CP: 830,
      SP: 0.91444,
    },
  ];

  return (
    <>
      <Flex direction="column">
        <Flex direction="column">
          <Heading
            fontSize="40px"
            fontWeight="600"
            color="#32409A"
            letterSpacing="2.4px"
            p="18px "
            textAlign="center"
          >
            Stock
          </Heading>
        </Flex>
        <Flex justifyContent="center" p="13px 73px">
          <InputGroup
            justifyContent="Center
        "
          >
            <Input
              bgColor="#F7F7F7"
              boxShadow="0px 1px 2px 0px rgba(0, 0, 0, 0.25)"
              h="50px"
              borderRadius="12px"
              maxW="376px"
              p="15px 34px"
              placeholder="Search by Name"
              _placeholder={{ letterSpacing: "2px", padding: "20px" }}
            />
          </InputGroup>
          <Link href="Stock/Add-stock">
            <Image src="/addstock.svg" />
          </Link>
        </Flex>

        <Table w="100%" justifyContent="center">
          <Thead>
            <Tr>
              <Th
                borderTop="1px solid #E7E7E7"
                borderBottom="1px solid #E7E7E7"
                fontSize="20px"
                fontWeight="500px"
                color="#013134"
              >
                SR
              </Th>
              <Th
                borderTop="1px solid #E7E7E7"
                borderBottom="1px solid #E7E7E7"
                fontSize="20px"
                fontWeight="500px"
                color="#013134"
              >
                Name
              </Th>
              <Th
                borderTop="1px solid #E7E7E7"
                borderBottom="1px solid #E7E7E7"
                fontSize="20px"
                fontWeight="500px"
                color="#013134"
              >
                Batch#
              </Th>
              <Th
                borderTop="1px solid #E7E7E7"
                borderBottom="1px solid #E7E7E7"
                fontSize="20px"
                fontWeight="500px"
                color="#013134"
              >
                QTY
              </Th>
              <Th
                borderTop="1px solid #E7E7E7"
                borderBottom="1px solid #E7E7E7"
                fontSize="20px"
                fontWeight="500px"
                color="#013134"
              >
                C.P
              </Th>
              <Th
                borderTop="1px solid #E7E7E7"
                borderBottom="1px solid #E7E7E7"
                fontSize="20px"
                fontWeight="500px"
                color="#013134"
              >
                S.P
              </Th>

              <Th
                borderTop="1px solid #E7E7E7"
                borderBottom="1px solid #E7E7E7"
                fontSize="20px"
                fontWeight="500px"
                color="#013134"
              >
                Actions
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {customer.map((data) => (
              <Tr key={data.id} h="40px">
                <Td
                  color="#000"
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="500"
                  lineHeight="24.018px"
                >
                  {" "}
                  {data.SR}
                </Td>
                <Td color="#000" fontSize="16px">
                  {data.Name}
                </Td>
                <Td
                  color="#000"
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="500"
                  lineHeight="24.018px"
                >
                  {data.Batch}
                </Td>
                <Td
                  color="#000"
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="500"
                  lineHeight="24.018px"
                >
                  {data.Qty}
                </Td>
                <Td
                  color="#000"
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="500"
                  lineHeight="24.018px"
                >
                  {data.CP}
                </Td>
                <Td
                  color="#000"
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="500"
                  lineHeight="24.018px"
                >
                  {data.SP}
                </Td>

                <Td>
                  <Flex gap="20px">
                    {" "}
                    <Link href="/Stock/Update-stock">
                      <Image src="/update.svg" />
                    </Link>{" "}
                    <Link href="/Stock/View-Stock">
                      <Image src="/view.svg" />
                    </Link>{" "}
                    <Image src="/delete.svg" onClick={onOpen} />
                  </Flex>{" "}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
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
