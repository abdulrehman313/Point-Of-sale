"use client";
import {
  Box,
  Flex,
  Heading,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  Tr,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const page = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const histrory = [
    {
      SR: 1,
      Date: "22-02-2023",
      Invoiceno: 21053,
      Grosstotal: 10000,
      Status: "Accpeted",
    },
    {
      SR: 2,
      Date: "22-02-2023",
      Invoiceno: 21053,
      Grosstotal: 10000,
      Status: "Accpeted",
    },
    {
      SR: 3,
      Date: "22-02-2023",
      Invoiceno: 21053,
      Grosstotal: 10000,
      Status: "Accpeted",
    },
    {
      SR: 4,

      Date: "22-02-2023",
      Invoiceno: 21053,
      Grosstotal: 10000,
      Status: "Accpeted",
    },
    {
      SR: 5,
      Date: "22-02-2023",
      Invoiceno: 21053,
      Grosstotal: 10000,
      Status: " Accpeted",
    },
    {
      SR: 6,
      Date: "22-02-2023",
      Invoiceno: 21053,
      Grosstotal: 10000,
      Status: " Accpeted",
    },
    {
      SR: 7,

      Date: "22-02-2023",
      Invoiceno: 21053,
      Grosstotal: 10000,
      Status: "Accpeted",
    },
    {
      SR: 8,
      Date: "22-02-2023",
      Invoiceno: 21053,
      Grosstotal: 10000,
      Status: " Accpeted",
    },
    {
      SR: 9,
      Date: "22-02-2023",
      Invoiceno: 21053,
      Grosstotal: 10000,
      Status: " Accpeted",
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
            Customer history
          </Heading>
        </Flex>
        <Flex p="5px 70px" justifyContent="space-between">
          <Flex /* justifyContent="center" alignItems="center"  */ gap="68px">
            <Flex>
              <Heading fontSize="24px" fontWeight="600" fontFamily="Inter">
                Name:
              </Heading>
            </Flex>
            <Flex>
              <Text
                fontSize="20px"
                fontWeight="400"
                fontFamily="Inter"
                color="#666666"
              >
                Clinix pharma
              </Text>
            </Flex>
          </Flex>

          <Flex justifyContent="center" alignItems="center" gap="68px">
            <Flex>
              <Heading fontSize="24px" fontWeight="600" fontFamily="Inter">
                License number:
              </Heading>
            </Flex>
            <Flex>
              <Text
                fontSize="20px"
                fontWeight="400"
                fontFamily="Inter"
                color="#666666"
              >
                546321
              </Text>
            </Flex>
          </Flex>
        </Flex>

        <Flex p="5px 70px" justifyContent="space-between">
          <Flex /* justifyContent="center" alignItems="center"  */ gap="68px">
            <Flex>
              <Heading fontSize="24px" fontWeight="600" fontFamily="Inter">
                Address:
              </Heading>
            </Flex>
            <Flex>
              <Text
                fontSize="20px"
                fontWeight="400"
                fontFamily="Inter"
                color="#666666"
              >
                samanabad Lahore
              </Text>
            </Flex>
          </Flex>

          <Flex justifyContent="center" alignItems="center" gap="68px">
            <Flex>
              <Heading fontSize="24px" fontWeight="600" fontFamily="Inter">
                Phone No.
              </Heading>
            </Flex>
            <Flex>
              <Text
                fontSize="20px"
                fontWeight="400"
                fontFamily="Inter"
                color="#666666"
              >
                +9234567891
              </Text>
            </Flex>
          </Flex>
        </Flex>

        <Flex direction="column" justify="center" padding="35px 0px">
          <Table>
            <Thead>
              <Tr>
                <Th
                  borderTop="1px solid #E7E7E7"
                  borderBottom="1px solid #E7E7E7"
                  fontSize="18px"
                  fontWeight="500px"
                  color="#013134"
                >
                  SR
                </Th>
                <Th
                  borderTop="1px solid #E7E7E7"
                  borderBottom="1px solid #E7E7E7"
                  fontSize="18px"
                  fontWeight="500px"
                  color="#013134"
                >
                  Date
                </Th>
                <Th
                  borderTop="1px solid #E7E7E7"
                  borderBottom="1px solid #E7E7E7"
                  fontSize="18px"
                  fontWeight="500px"
                  color="#013134"
                >
                  Invoice no#
                </Th>
                <Th
                  borderTop="1px solid #E7E7E7"
                  borderBottom="1px solid #E7E7E7"
                  fontSize="16px"
                  fontWeight="500px"
                  color="#013134"
                >
                  Gross total
                </Th>
                <Th
                  borderTop="1px solid #E7E7E7"
                  borderBottom="1px solid #E7E7E7"
                  fontSize="18px"
                  fontWeight="500px"
                  color="#013134"
                >
                  Status
                </Th>

                <Th
                  borderTop="1px solid #E7E7E7"
                  borderBottom="1px solid #E7E7E7"
                  fontSize="18px"
                  fontWeight="500px"
                  color="#013134"
                >
                  Actions
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {histrory.map((data) => (
                <Tr key={data.id}>
                  <Td
                    color="#000"
                    fontSize="14px"
                    fontStyle="normal"
                    fontWeight="500"
                  >
                    {data.SR}
                  </Td>
                  <Td
                    color="#000"
                    fontSize="14px"
                    fontStyle="normal"
                    fontWeight="500"
                  >
                    {data.Date}
                  </Td>
                  <Td
                    color="#000"
                    fontSize="14px"
                    fontStyle="normal"
                    fontWeight="500"
                  >
                    {data.Invoiceno}
                  </Td>
                  <Td
                    color="#000"
                    fontSize="14px"
                    fontStyle="normal"
                    fontWeight="500"
                  >
                    {data.Grosstotal}
                  </Td>
                  <Td
                    // color="#0FA958"
                    color="#000"
                    fontSize="14px"
                    fontStyle="normal"
                    fontWeight="500"
                  >
                    {data.Status}
                  </Td>
                  <Td>
                    <Flex gap="15px">
                      {" "}
                      <Link href="/CustomerScreen/Update-customer">
                        <Image src="/update.svg" />
                      </Link>{" "}
                      <Link href="/Stock/View-Stock">
                        <Image src="/download.svg" />
                      </Link>{" "}
                      <Image src="/delete.svg" onClick={onOpen} />
                    </Flex>{" "}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
          <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
          >
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  Delete Dealer
                </AlertDialogHeader>

                <AlertDialogBody>
                  Are you sure to delete dealer?
                </AlertDialogBody>

                <AlertDialogFooter>
                  <Button ref={cancelRef} onClick={onClose}>
                    Cancel
                  </Button>

                  <Button
                    colorScheme="red"
                    onClick={() => {
                      handleDelete(idToDelete);
                      onClose();
                    }}
                    ml={3}
                  >
                    Delete
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </Flex>
      </Flex>
    </>
  );
};

export default page;
