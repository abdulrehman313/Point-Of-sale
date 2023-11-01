"use client";
import {
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import React from "react";

const page = () => {
  return (
    <>
      <Flex direction="column" justifyContent="center" alignItems="center">
        <Heading
          fontSize="40px"
          fontWeight="600"
          color="#32409A"
          letterSpacing="2.4px"
          p="18px "
          textAlign="center"
        >
          Update Customer
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
              />
            </Flex>
            <Flex direction="column" w="100%">
              <FormLabel
                fontSize="20px"
                fontWeight="500"
                letterSpacing="0.96px"
              >
                License ID
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
                Phone No
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
                Reference
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
          {/* <Flex p="10px" gap="36px">
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
                borderRadius="12px"
              />
            </Flex>
          </Flex> */}
          {/* <Flex p="10px" gap="36px">
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
                h="57px"
                bgColor="#F7F7F7"
                borderRadius="12px"
              />
            </Flex>
          </Flex> */}

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
            ></Textarea>
          </Flex>
          <Flex gap="10" m="10px 0px" justifyContent="flex-end">
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
    </>
  );
};

export default page;
