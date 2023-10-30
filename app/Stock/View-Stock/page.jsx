"use client";
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Table,
  TableContainer,
  Tbody,
  Td,
  Textarea,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <Flex direction="column" alignItems="center" justifyContent="center">
        <Heading
          fontSize="40px"
          fontWeight="600"
          color="#32409A"
          letterSpacing="2.4px"
          p="18px "
          textAlign="center"
        >
          View Stock
        </Heading>
        <FormControl w="702px" justifyContent="center" alignItems="center">
          <Flex p="10px" gap="36px">
            <Flex direction="column" w="100%">
              <FormLabel
                fontSize="20px"
                fontWeight="500"
                letterSpacing="0.96px"
              >
                Name
              </FormLabel>
              <Input
                boxShadow="0px 1px 2px 0px rgba(0, 0, 0, 0.25)"
                w="100%"
                h="57px"
                bgColor="#F7F7F7"
                borderRadius="12px"
                disabled
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
                disabled
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
                disabled
              />
            </Flex>
            <Flex direction="column" w="100%">
              <FormLabel
                fontSize="20px"
                fontWeight="500"
                letterSpacing="0.96px"
              >
                Expiry Date
              </FormLabel>
              <Input
                boxShadow="0px 1px 2px 0px rgba(0, 0, 0, 0.25)"
                placeholder="DD/MM/YYYY"
                w="100%"
                h="57px"
                bgColor="#F7F7F7"
                disabled
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
                Sale Price
              </FormLabel>
              <Input
                boxShadow="0px 1px 2px 0px rgba(0, 0, 0, 0.25)"
                w="100%"
                h="57px"
                bgColor="#F7F7F7"
                borderRadius="12px"
                disabled
              />
            </Flex>
            <Flex direction="column " w="100%">
              <FormLabel
                fontSize="20px"
                fontWeight="500"
                letterSpacing="0.96px"
              >
                Cost price
              </FormLabel>
              <Input
                boxShadow="0px 1px 2px 0px rgba(0, 0, 0, 0.25)"
                disabled
                // w="100%"
                h="57px"
                bgColor="#F7F7F7"
                borderRadius="12px"
              />
            </Flex>
          </Flex>

          <Flex p="10px" w="100%" direction="column">
            <FormLabel fontWeight="500" letterSpacing="0.96px">
              Address:
            </FormLabel>
            <Textarea
              boxShadow="0px 1px 2px 0px rgba(0, 0, 0, 0.25)"
              h="152px"
              bgColor="#F7F7F7"
              resize="none"
              borderRadius="12px"
              disabled
            ></Textarea>
          </Flex>
          <Flex gap="10" m="10px 0px" justifyContent="end">
            <Flex gap="0px">
              <Button
                m="10px"
                bgColor="#28337D"
                color="white"
                w="120px"
                h="50px"
                fontWeight="600"
                fontSize="20px"
                _hover="none"
                borderRadius="12px"
              >
                Save
              </Button>
              <Button
                m="10px"
                variant="outline"
                border="1px solid #28337D"
                color="#28337D"
                w="120px"
                h="50px"
                fontWeight="400"
                fontSize="20x"
                borderRadius="12px"
              >
                Cancel
              </Button>
            </Flex>
          </Flex>
        </FormControl>
      </Flex>
      {/* <Flex m="32px 3px">
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
        </Table>
      </Flex> */}
    </>
  );
};

export default page;
