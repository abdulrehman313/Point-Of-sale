"use client";
import {
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  Table,
  TableContainer,
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
import React from "react";
import Link from "next/link";

const page = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const customer = [
    {
      SR: 1,
      LicenseID: 4358,
      Name: "Zain",
      Phoneno: +9200000000000,
    },
    {
      SR: 2,
      LicenseID: 1258,
      Name: "qasim",
      Phoneno: +9200000000000,
    },
    {
      SR: 3,
      LicenseID: 4454,
      Name: "saad",
      Phoneno: +9200000000000,
    },
    {
      SR: 4,
      LicenseID: 1238,
      Name: "shan",
      Phoneno: +9200000000000,
    },
    {
      SR: 5,
      LicenseID: 4128,
      Name: "ali",
      Phoneno: +9200000000000,
    },
  ];
  return (
    <>
      <Flex direction="column">
        <Flex w="100%" direction="column">
          <Heading
            fontSize="40px"
            fontWeight="600"
            color="#32409A"
            letterSpacing="2.4px"
            p="18px "
            textAlign="center"
          >
            Customer List
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
          <Link href="CustomerScreen/Add-customer">
            <Image src="/addstock.svg" />
          </Link>
        </Flex>
        <Flex /* m="32px 38px" */>
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
                  License ID
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
                  Phone no.
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
                  <Td
                    color="#000"
                    fontSize="16px"
                    fontStyle="normal"
                    fontWeight="500"
                    lineHeight="24.018px"
                  >
                    {data.LicenseID}
                  </Td>
                  <Td
                    color="#000"
                    fontSize="16px"
                    fontStyle="normal"
                    fontWeight="500"
                    lineHeight="24.018px"
                  >
                    {data.Name}
                  </Td>
                  <Td
                    color="#000"
                    fontSize="16px"
                    fontStyle="normal"
                    fontWeight="500"
                    lineHeight="24.018px"
                  >
                    {data.Phoneno}
                  </Td>

                  <Td>
                    <Flex gap="20px">
                      {" "}
                      <Link href="/CustomerScreen/Update-customer">
                        <Image src="/update.svg" />
                      </Link>{" "}
                      <Link href="/CustomerScreen/Customer-history">
                        <Image src="/history.svg" />
                      </Link>{" "}
                      <Image src="/delete.svg" onClick={onOpen} />
                    </Flex>{" "}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
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
