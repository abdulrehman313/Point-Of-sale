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
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";

const LogIn = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <Flex w="100%" align="center" justify="center">
        <Flex position="relative" h="100vh" w="100%">
          <Flex w="50%" bgColor="#E8EBFF"></Flex>
          <Flex w="50%" bgColor="#253078"></Flex>
        </Flex>
        <Flex
          borderRadius="40px"
          bgColor="White"
          // h="780px"
          // maxW="1250px"
          position="absolute"
          p="84px 34px"
        >
          <Flex
            direction="column"
            // justifyContent="center"
            alignItems="center"
            w="50%"
          >
            <Heading
              fontSize="37px"
              fontWeight="700"
              letterSpacing="3.6px"
              color="#253078"
              mb="60px"
            >
              Log In
            </Heading>
            <FormControl>
              <FormLabel
                mb="15px"
                fontSize="24px"
                fontWeight="500"
                letterSpacing="0.96px"
              >
                Username/Email:
              </FormLabel>
              <Input
                p="10px"
                // w="555px"
                h="60px"
                bgColor="#F7F7F7"
                borderRadius="12px"
              />
              <FormLabel
                fontSize="24px"
                fontWeight="500"
                letterSpacing="0.96px"
              >
                Password:
              </FormLabel>

              <InputGroup size="md">
                <Input
                  w="555px"
                  h="60px"
                  p="10px"
                  bgColor="#F7F7F7"
                  borderRadius="12px"
                  type={show ? "text" : "password"}
                />
                <InputRightElement width="2.5rem">
                  <Button
                    variant="link"
                    onClick={handleClick}
                    mr="15px"
                    mt="20px"
                  >
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <Flex justifyContent="space-between" mb="30px" mt="10px">
                <Checkbox
                  size="lg"
                  fontSize="20px"
                  fontWeight="500"
                  colorScheme="blue"
                >
                  Remember me.
                </Checkbox>
                <Link href="/">
                  <Text color="#FF0000" fontSize="16px" fontWeight="500">
                    Forgot Passwrord?
                  </Text>
                </Link>
              </Flex>
            </FormControl>
            <Link href="/Landing-dashboard">
              <Button
                // p="30px"
                bgColor="#28337D"
                color="white"
                // w="300px"
                minW="300px"
                h="50px"
                fontWeight="600"
                fontSize="24px"
                borderRadius="12px"
                _hover="none"
              >
                Log In
              </Button>
            </Link>

            <Text fontSize="20px" mt="30px" fontWeight="500">
              Don’t have an account,{" "}
              <Link href="/Sign-up">
                {" "}
                <span style={{ color: "#28337D" }}>Sign up</span>{" "}
              </Link>
            </Text>
          </Flex>
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            gap="73px"
            w="50%"
          >
            <Heading fontSize="32px" fontWeight="600" letterSpacing="1.92px">
              {" "}
              Arsalan Technologies
            </Heading>
            <Image src="/amico.svg" />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default LogIn;
