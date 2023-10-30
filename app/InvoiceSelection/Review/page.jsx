"use client";
import {
  Button,
  Flex,
  FormLabel,
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
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const page = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const dummy = [
    {
      SR: 1,
      MedicineName: "Medicine A",
      Batch: "12345",
      Qty: 10,
      Rate: 25.0,
      Discount: "5%",
    },
    {
      SR: 2,
      MedicineName: "Medicine B",
      Batch: "67690",
      Qty: 5,
      Rate: 30.0,
      Discount: "10%",
    },
    {
      SR: 3,
      MedicineName: "Medicine C",
      Batch: "54321",
      Qty: 20,
      Rate: 15.0,
      Discount: "2%",
    },
    {
      SR: 4,
      MedicineName: "Medicine D",
      Batch: "98765",
      Qty: 8,
      Rate: 22.0,
      Discount: "8%",
    },
    {
      SR: 5,
      MedicineName: "Medicine E",
      Batch: "24680",
      Qty: 15,
      Rate: 18.0,
      Discount: "3%",
    },
  ];
  return (
    <>
      <Flex /* p="32px 70px" */ direction="column">
        <Flex /* w="100%" */ direction="column">
          <Heading
            fontSize="40px"
            fontWeight="600"
            color="#32409A"
            letterSpacing="2.4px"
            textAlign="center"
            p="18px "
          >
            Review
          </Heading>
        </Flex>
        <Flex p="5px 15px" justifyContent="space-between">
          <Flex gap="34px">
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

          <Flex justifyContent="center" alignItems="center" gap="38px">
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

        <Flex p="5px 15px" justifyContent="space-between">
          <Flex gap="34px">
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

          <Flex justifyContent="center" alignItems="center" gap="38px">
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
        <Flex w="100%">
          {/* <TableContainer> */}
          <Table>
            <Thead>
              <Tr>
                <Th
                  borderTop="1px solid #E7E7E7"
                  borderBottom="1px solid #E7E7E7"
                  fontSize="16px"
                  fontWeight="500px"
                  color="#013134"
                >
                  SR.
                </Th>
                <Th
                  borderTop="1px solid #E7E7E7"
                  borderBottom="1px solid #E7E7E7"
                  fontSize="16px"
                  fontWeight="500px"
                  color="#013134"
                >
                  Medicine Name
                </Th>
                <Th
                  borderTop="1px solid #E7E7E7"
                  borderBottom="1px solid #E7E7E7"
                  fontSize="16px"
                  fontWeight="500px"
                  color="#013134"
                >
                  Batch #
                </Th>
                <Th
                  borderTop="1px solid #E7E7E7"
                  borderBottom="1px solid #E7E7E7"
                  fontSize="16px"
                  fontWeight="500px"
                  color="#013134"
                >
                  Qty
                </Th>
                <Th
                  borderTop="1px solid #E7E7E7"
                  borderBottom="1px solid #E7E7E7"
                  fontSize="16px"
                  fontWeight="500px"
                  color="#013134"
                >
                  Rate
                </Th>
                <Th
                  borderTop="1px solid #E7E7E7"
                  borderBottom="1px solid #E7E7E7"
                  fontSize="16px"
                  fontWeight="500px"
                  color="#013134"
                >
                  Discount
                </Th>
                <Th
                  borderTop="1px solid #E7E7E7"
                  borderBottom="1px solid #E7E7E7"
                  fontSize="16px"
                  fontWeight="500px"
                  color="#013134"
                >
                  Actions
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {dummy.map((data) => (
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
                    {data.MedicineName}
                  </Td>
                  <Td
                    color="#000"
                    fontSize="14px"
                    fontStyle="normal"
                    fontWeight="500"
                  >
                    {data.Batch}
                  </Td>
                  <Td
                    color="#000"
                    fontSize="14px"
                    fontStyle="normal"
                    fontWeight="500"
                  >
                    {data.Qty}
                  </Td>
                  <Td
                    color="#000"
                    fontSize="14px"
                    fontStyle="normal"
                    fontWeight="500"
                  >
                    {data.Rate}
                  </Td>
                  <Td
                    color="#000"
                    fontSize="14px"
                    fontStyle="normal"
                    fontWeight="500"
                  >
                    {data.Discount}
                  </Td>

                  <Td>
                    <Image src="/delete.svg" ml="25px" onClick={onOpen} />
                    {/* </Flex>{" "} */}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
          {/* </TableContainer> */}
        </Flex>
        <Flex justifyContent="end">
          <Flex direction="column">
            <Flex p="30px" gap="190px">
              <Flex gap="25px">
                <Heading fontSize="22px" fontWeight="500" fontFamily="Inter">
                  Excluding Tax
                </Heading>

                <Text
                  fontSize="20px"
                  fontWeight="400"
                  fontFamily="Inter"
                  color="#666666"
                >
                  900
                </Text>
              </Flex>

              <Flex gap="25px">
                <Heading fontSize="22px" fontWeight="500" fontFamily="Inter">
                  Discount Rate
                </Heading>

                <Text
                  fontSize="20px"
                  fontWeight="400"
                  fontFamily="Inter"
                  color="#666666"
                >
                  15%
                </Text>
              </Flex>
            </Flex>
            <Flex p="30px" gap="190px">
              <Flex gap="25px">
                <Heading fontSize="22px" fontWeight="500" fontFamily="Inter">
                  Including Tax
                </Heading>

                <Text
                  fontSize="20px"
                  fontWeight="400"
                  fontFamily="Inter"
                  color="#666666"
                >
                  2560
                </Text>
              </Flex>

              <Flex gap="25px">
                <Heading fontSize="22px" fontWeight="500" fontFamily="Inter">
                  Sales tax
                </Heading>

                <Text
                  fontSize="20px"
                  fontWeight="400"
                  fontFamily="Inter"
                  color="#666666"
                >
                  3500
                </Text>
              </Flex>
            </Flex>
            <Flex justifyContent="flex-end" gap="25px" p="30px">
              <Heading fontSize="22px" fontWeight="500" fontFamily="Inter">
                Gross Total
              </Heading>

              <Text
                fontSize="20px"
                fontWeight="400"
                fontFamily="Inter"
                color="#666666"
                mr="20px"
              >
                5000
              </Text>

              {/* <Flex gap="25px">
                <Heading fontSize="22px" fontWeight="500" fontFamily="Inter">
                  Discount Rate
                </Heading>

                <Text
                  fontSize="20px"
                  fontWeight="400"
                  fontFamily="Inter"
                  color="#666666"
                >
                  15%
                </Text>
              </Flex> */}
            </Flex>

            {/* <Flex p="5px 15px" justifyContent="space-between">
              <Flex gap="34px">
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

              <Flex justifyContent="center" alignItems="center" gap="38px">
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
            </Flex> */}
          </Flex>
        </Flex>
        <Flex justifyContent="center" alignItems="center">
          <Flex gap="35">
            <Link href="/InvoiceSelection/Review">
              <Button
                m="10px"
                bgColor="#28337D"
                color="white"
                w="140px"
                h="50px"
                fontWeight="400"
                fontSize="18px"
                _hover="none"
                borderRadius="12px"
              >
                Generate
              </Button>{" "}
            </Link>

            <Button
              m="10px"
              bgColor="#28337D"
              _hover="none"
              color="white"
              w="140px"
              h="50px"
              fontWeight="400"
              fontSize="18px"
              borderRadius="12px"
            >
              Cancel
            </Button>
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
