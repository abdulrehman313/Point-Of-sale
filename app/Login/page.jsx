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
import { Field, Form, Formik, useFormik } from "formik";
import * as Yup from "yup";

const LogIn = () => {
  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid Email")

      .required("Required")
      .test("emailFormat", "Invalid Email", (value) => {
        if (value) {
          return value.includes("@") && value.includes(".");
        }
        return false;
      }),
    password: Yup.string()
      .min(4, "Your password must be 4 characters long")
      .max(10, "Too Long")
      .required("Password needed!"),
  });
  const handleSubmit = (values) => {
    const BODY = {
      email: values.email,
      password: values.password,
    };
    console.log(BODY);
  };

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
          position="absolute"
          p="84px 34px"
        >
          <Flex direction="column" alignItems="center" w="50%">
            <Heading
              fontSize="37px"
              fontWeight="700"
              letterSpacing="3.6px"
              color="#253078"
              mb="20px"
            >
              Log In
            </Heading>

            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={loginSchema}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {({ errors, touched }) => (
                <Form className="form">
                  <Flex className="fields" w="100%">
                    <FormLabel
                      mb="15px"
                      fontSize="24px"
                      fontWeight="500"
                      letterSpacing="0.96px"
                    >
                      Username/Email:
                    </FormLabel>
                    <Field className="fieldss" name="email" type="email" />

                    <span style={{ color: "red" }}>
                      {" "}
                      {errors.email && touched.email ? (
                        <div>{errors.email}</div>
                      ) : null}
                    </span>
                    <FormLabel
                      fontSize="24px"
                      fontWeight="500"
                      letterSpacing="0.96px"
                    >
                      Password:
                    </FormLabel>

                    <Field
                      className="fieldss"
                      name="password"
                      type={show ? "text" : "password"}
                    />
                    <Flex justifyContent="flex-end">
                      <Text
                        w="50px"
                        p="0px"
                        margin="10px"
                        bgColor="white"
                        textColor="gray"
                        _hover="none"
                        type="button"
                        cursor="pointer"
                        onClick={() => setShow(!show)}
                      >
                        {show ? "Hide" : "Show"}
                      </Text>
                    </Flex>

                    {errors.password && touched.password ? (
                      <div style={{ color: "red" }}> {errors.password}</div>
                    ) : null}
                    <Flex justifyContent="space-between" mb="30px" mt="10px">
                      <Checkbox
                        size="lg"
                        fontSize="14px"
                        fontWeight="500"
                        colorScheme="blue"
                      >
                        Remember me.
                      </Checkbox>
                      <Link href="/Landing-dashboard">
                        <Text color="#FF0000" fontSize="14px" fontWeight="500">
                          Forgot Passwrord?
                        </Text>
                      </Link>
                    </Flex>
                    <Button
                      bgColor="#28337D"
                      color="white"
                      minW="300px"
                      h="50px"
                      fontWeight="600"
                      fontSize="24px"
                      borderRadius="12px"
                      _hover="none"
                      type="submit"
                    >
                      Log In
                    </Button>
                  </Flex>
                </Form>
              )}
            </Formik>

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
{
  /* <Link href="/Landing-dashboard"> */
}
{
  /* </Link> */
}
