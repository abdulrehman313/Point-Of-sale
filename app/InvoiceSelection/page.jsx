"use client";
import {
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Image,
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

  return (
    <>
      <Flex direction="column" justifyContent="center" alignItems="center">
        <Heading
          fontSize="42px"
          fontWeight="700"
          color="#32409A"
          letterSpacing="2.4px"
          textAlign="center"
          p="18px "
        >
          Invoice Section
        </Heading>
        <FormControl w="702px" justifyContent="center" alignItems="center">
          <Flex p="10px" gap="36px">
            <Flex direction="column" w="100%">
              <FormLabel
                fontSize="20px"
                fontWeight="500"
                letterSpacing="0.96px"
              >
                Select Customer
              </FormLabel>
              <Input
                boxShadow="0px 1px 2px 0px rgba(0, 0, 0, 0.25)"
                w="100%"
                h="57px"
                bgColor="#F7F7F7"
                borderRadius="12px"
              />
            </Flex>
            <Flex direction="column" w="100%">
              <FormLabel
                fontSize="20px"
                fontWeight="500"
                letterSpacing="0.96px"
              >
                Date
              </FormLabel>
              <Input
                boxShadow="0px 1px 2px 0px rgba(0, 0, 0, 0.25)"
                w="100%"
                h="57px"
                placeholder="DD/MM/YYYY"
                bgColor="#F7F7F7"
                borderRadius="12px"
              />
            </Flex>
          </Flex>
          <Flex p="10px" gap="36px">
            <Flex direction="column" w="100%">
              <FormLabel
                fontSize="20px"
                fontWeight="500"
                letterSpacing="0.96px"
              >
                Medicine Name
              </FormLabel>
              <Input
                boxShadow="0px 1px 2px 0px rgba(0, 0, 0, 0.25)"
                w="100%"
                h="57px"
                bgColor="#F7F7F7"
                borderRadius="12px"
              />
            </Flex>
            <Flex direction="column" w="100%">
              <FormLabel
                fontSize="20px"
                fontWeight="500"
                letterSpacing="0.96px"
              >
                Quantity
              </FormLabel>
              <Input
                boxShadow="0px 1px 2px 0px rgba(0, 0, 0, 0.25)"
                w="100%"
                h="57px"
                bgColor="#F7F7F7"
                borderRadius="12px"
              />
            </Flex>
          </Flex>
          <Flex p="10px" gap="36px">
            <Flex direction="column" w="100%">
              <FormLabel
                fontSize="20px"
                fontWeight="500"
                letterSpacing="0.96px"
              >
                Batch No
              </FormLabel>
              <Input
                boxShadow="0px 1px 2px 0px rgba(0, 0, 0, 0.25)"
                w="100%"
                h="57px"
                bgColor="#F7F7F7"
                borderRadius="12px"
              />
            </Flex>
            <Flex direction="column " w="100%">
              <FormLabel
                fontSize="20px"
                fontWeight="500"
                letterSpacing="0.96px"
              >
                Rate
              </FormLabel>
              <Input
                boxShadow="0px 1px 2px 0px rgba(0, 0, 0, 0.25)"
                h="57px"
                bgColor="#F7F7F7"
                borderRadius="12px"
              />
            </Flex>
          </Flex>
          <Flex p="10px" gap="36px">
            <Flex direction="column" w="100%">
              <FormLabel
                fontSize="20px"
                fontWeight="500"
                letterSpacing="0.96px"
              >
                Sales Tax 17%
              </FormLabel>
              <Input
                boxShadow="0px 1px 2px 0px rgba(0, 0, 0, 0.25)"
                w="100%"
                h="57px"
                bgColor="#F7F7F7"
                borderRadius="12px"
              />
            </Flex>
            <Flex direction="column " w="100%">
              <FormLabel
                fontSize="20px"
                fontWeight="500"
                letterSpacing="0.96px"
              >
                Discount
              </FormLabel>
              <Input
                boxShadow="0px 1px 2px 0px rgba(0, 0, 0, 0.25)"
                h="57px"
                bgColor="#F7F7F7"
                borderRadius="12px"
              />
            </Flex>
          </Flex>
          <Flex p="10px" gap="36px">
            <Flex direction="column" w="100%">
              <FormLabel
                fontSize="20px"
                fontWeight="500"
                letterSpacing="0.96px"
              >
                Total
              </FormLabel>
              <Input
                boxShadow="0px 1px 2px 0px rgba(0, 0, 0, 0.25)"
                w="100%"
                h="57px"
                bgColor="#F7F7F7"
                borderRadius="12px"
              />
            </Flex>
            <Flex direction="column " w="100%">
              <Flex
                direction="column "
                alignItems="center"
                m="auto"
                justifyContent="center"
              >
                <Button
                  m="10px"
                  bgColor="#28337D"
                  color="white"
                  w="150px"
                  h="57px"
                  fontWeight="600"
                  fontSize="20px"
                  borderRadius="12px"
                  _hover="none"
                >
                  Add
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </FormControl>

        <Flex direction="column">
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
              <Tr>
                <Td
                  color="#000"
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight="500"
                >
                  1
                </Td>
                <Td
                  color="#000"
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight="500"
                >
                  Ruben
                </Td>
                <Td
                  color="#000"
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight="500"
                >
                  1
                </Td>
                <Td
                  color="#000"
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight="500"
                >
                  23
                </Td>
                <Td
                  color="#000"
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight="500"
                >
                  67
                </Td>
                <Td
                  color="#000"
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight="500"
                >
                  67%
                </Td>
                <Td>
                  <Flex justifyContent="center" alignItems="center">
                    {" "}
                    <Image src="/delete.svg" onClick={onOpen} />
                  </Flex>{" "}
                </Td>
              </Tr>
              <Tr>
                <Td
                  color="#000"
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight="500"
                >
                  2
                </Td>
                <Td
                  color="#000"
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight="500"
                >
                  Lincoln
                </Td>
                <Td
                  color="#000"
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight="500"
                >
                  1
                </Td>
                <Td
                  color="#000"
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight="500"
                >
                  37
                </Td>
                <Td
                  color="#000"
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight="500"
                >
                  81
                </Td>
                <Td
                  color="#000"
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight="500"
                >
                  81%
                </Td>
                <Td>
                  <Flex justifyContent="center" alignItems="center">
                    {" "}
                    <Image src="/delete.svg" onClick={onOpen} />
                  </Flex>{" "}
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Flex justifyContent="flex-end " m="20px">
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
                  Proceed
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
