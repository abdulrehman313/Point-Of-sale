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
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Link from "next/link";

import React, { useState } from "react";

const SignIn = () => {
  const signupSchema = Yup.object().shape({
    Name: Yup.string()

      .min(2, "Too Short!")
      .max(10, "Too Long")
      .required("Required"),
    phoneno: Yup.string()
      .min(2, "Too Short!")
      .max(10, "Too Long")
      .required("Required"),
    licesnse_no: Yup.string()
      .min(2, "Too Short!")
      .max(10, "Too Long")
      .required("Required"),
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
    confirm_password: Yup.string()
      .min(4, "Your password must be 4 characters long")
      .max(10, "Too Long")
      .required("Password needed!"),
  });
  const [name, setName] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [distribution, setDistribution] = useState("");
  const [email, setEmail] = useState("");
  const [license, setLicense] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleButtonClick = () => {
    const BODY = {
      name: name,
      phoneno: phoneno,
      distributionname: distribution,
      email: email,
      licesnse_no: license,
      password: password,
      confirm_password: confirm,
    };
    axios
      .post(`http://192.168.10.145:8000/signup/`, BODY)
      .then((res) => {
        // if (res) setName("");

        console.log("Response:", res.BODY);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    // const BODY = {
    //   name: name,
    //   phoneno: phoneno,
    //   distribution: distribution,
    //   email: email,
    //   license:license,
    //   password: password,
    //   confirm:confirm
    // };
  };
  // function saveUser() {
  //   console.warn(
  //     name,
  //     phoneno,
  //     distribution,
  //     email,
  //     license,
  //     password,
  //     confirm
  //   );
  // }

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [show2, setShow2] = useState(false);
  const handleClick2 = () => setShow2(!show2);
  return (
    <Flex w="100%" align="center" justify="center">
      <Flex position="relative" h="100vh" w="100%">
        <Flex w="50%" bgColor="#E8EBFF"></Flex>
        <Flex w="50%" bgColor="#253078"></Flex>
      </Flex>
      <Flex
        borderRadius="40px"
        bgColor="White"
        position="absolute"
        m="20px"
        p="44px 34px"
      >
        <Flex w="50%" direction="column">
          <Formik
            initialValues={{
              Name: "",
              phoneno: "",
              email: "",
              licesnse_no: "",
              password: "",
              confirm_password: "",
            }}
            validationSchema={signupSchema}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
          >
            {({ errors, touched }) => (
              <Form className="signform">
                <Flex gap="16px" w="100%">
                  <Flex direction="column" w="50%" className="signfields">
                    <FormLabel
                      mb="10px"
                      fontSize="20px"
                      fontWeight="500"
                      letterSpacing="0.96px"
                      htmlFor="name"
                    >
                      Name:
                    </FormLabel>
                    <Field className="fieldss" name="Name" type="text" />
                    {errors.Name && touched.Name ? (
                      <div style={{ color: "red" }}>{errors.Name}</div>
                    ) : null}
                  </Flex>
                  <Flex w="50%" direction="column">
                    <FormLabel
                      mb="10px"
                      fontSize="20px"
                      fontWeight="500"
                      letterSpacing="0.96px"
                      htmlFor="phoneno"
                    >
                      Phone No:
                    </FormLabel>
                    <Field className="fieldss" name="phoneno" type="text" />

                    {errors.phoneno && touched.phoneno ? (
                      <div style={{ color: "red" }}>{errors.phoneno}</div>
                    ) : null}
                  </Flex>
                </Flex>
                <Flex direction="column" w="100%">
                  <FormLabel
                    mb="10px"
                    fontSize="20px"
                    fontWeight="500"
                    letterSpacing="0.96px"
                    htmlFor="distribution"
                  >
                    Distribution Name:
                  </FormLabel>
                  <Field className="fieldss" name="disrtibution" type="text" />
                  {/* <Input
                    mb="10px"
                    p="10px"
                    h="40px"
                    bgColor="#F7F7F7"
                    borderRadius="12px"
                    type="text"
                    name="distribution"
                    id="disrtibution"
                    value={distribution}
                    onChange={(e) => {
                      setDistribution(e.target.value);
                    }}
                  /> */}
                </Flex>
                <Flex width="100%" gap="6px">
                  <Flex width="50%" direction="column">
                    <FormLabel
                      mb="10px"
                      fontSize="20px"
                      fontWeight="500"
                      letterSpacing="0.96px"
                      htmlFor="email"
                    >
                      Email:
                    </FormLabel>
                    <Field className="fieldss" name="email" type="email" />
                    {errors.email && touched.email ? (
                      <div style={{ color: "red" }}> {errors.email}</div>
                    ) : null}
                    {/* <Input
                      mb="10px"
                      p="10px"
                      h="40px"
                      bgColor="#F7F7F7"
                      borderRadius="12px"
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    /> */}
                  </Flex>
                  <Flex width="50%" direction="column">
                    <FormLabel
                      mb="10px"
                      fontSize="20px"
                      fontWeight="500"
                      letterSpacing="0.96px"
                      htmlFor="licesnse_no"
                    >
                      License No#
                    </FormLabel>
                    <Field className="fieldss" name="licesnse_no" type="text" />
                    {errors.licesnse_no && touched.licesnse_no ? (
                      <div style={{ color: "red" }}> {errors.licesnse_no}</div>
                    ) : null}
                    {/* <Input
                      mb="10px"
                      p="10px"
                      h="40px"
                      bgColor="#F7F7F7"
                      borderRadius="12px"
                      type="number"
                      name="license"
                      id="license"
                      value={license}
                      // value={valueslue.license}
                      onChange={(e) => {
                        setLicense(e.target.value);
                      }}
                    /> */}
                  </Flex>
                </Flex>
                <Flex width="100%" gap="6px">
                  <Flex width="50%" direction="column">
                    <FormLabel
                      mb="10px"
                      fontSize="20px"
                      fontWeight="500"
                      letterSpacing="0.96px"
                      htmlFor="passowrd"
                    >
                      Password:
                    </FormLabel>

                    <Field
                      className="fieldss"
                      name="password"
                      type={show ? "text" : "password"}
                    />
                    {errors.password && touched.password ? (
                      <div style={{ color: "red" }}> {errors.password}</div>
                    ) : null}
                    {/* <InputGroup size="md">
                   
                      <InputRightElement width="2.5rem">
                        <Button variant="link" onClick={handleClick} mr="15px">
                          {show ? "Hide" : "Show"}
                        </Button>
                      </InputRightElement>
                    </InputGroup> */}
                  </Flex>
                  <Flex width="50%" direction="column">
                    <FormLabel
                      mb="10px"
                      fontSize="20px"
                      fontWeight="500"
                      letterSpacing="0.96px"
                      htmlFor="confirm_password"
                    >
                      Confirm Password:
                    </FormLabel>
                    <Field
                      className="fieldss"
                      type={show2 ? "text" : "password"}
                      name="confirm_password"
                      s
                    />
                    {errors.confirm_password && touched.confirm_password ? (
                      <div style={{ color: "red" }}>
                        {" "}
                        {errors.confirm_password}
                      </div>
                    ) : null}
                    {/* <InputGroup size="md">
                  
                      <InputRightElement width="2.5rem">
                        <Button
                          variant="link"
                          onClick={handleClick2}
                
                          mr="15px"
                      
                        >
                          {show2 ? "Hide" : "Show"}
                        </Button>
                      </InputRightElement>
                    </InputGroup> */}
                  </Flex>
                </Flex>
                <Flex direction="column">
                  <FormLabel
                    mb="10px"
                    fontSize="20px"
                    fontWeight="500"
                    letterSpacing="0.96px"
                    htmlFor="address"
                  >
                    Address:
                    <Textarea
                      mb="10px"
                      h="90px"
                      bgColor="#F7F7F7"
                      borderRadius="12px"
                      type="Text"
                      name="address"
                      id="address"
                    ></Textarea>
                  </FormLabel>
                </Flex>
                <Flex direction="column" gap="10px">
                  <Text fontSize="16px" fontWeight="500">
                    Upload Signature:
                  </Text>
                  <Button
                    border="1px solid #484848"
                    ml="10px"
                    w="180px"
                    h="30px"
                    borderRadius="12"
                    color="#484848"
                    variant="outline"
                  >
                    {" "}
                    click to upload image{" "}
                  </Button>
                  <Text fontSize="16px" fontWeight="500" color="#484848">
                    PNG format Supported
                  </Text>
                </Flex>
                <Flex
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Link href="/Landing-dashboard">
                    <Button
                      m="10px"
                      bgColor="#28337D"
                      color="white"
                      w="300px"
                      h="50px"
                      fontWeight="600"
                      fontSize="24px"
                      borderRadius="12px"
                      _hover="none"
                      type="submit"
                      // isDisabled={isButtonDisabled}
                      // isLoading={isButtonDisabled}
                    >
                      Sign Up
                    </Button>
                  </Link>
                </Flex>
              </Form>
            )}
          </Formik>
          {/* <FormControl>
            <Flex gap="36px">
              <Flex direction="column">
                <FormLabel
                  mb="10px"
                  fontSize="20px"
                  fontWeight="500"
                  letterSpacing="0.96px"
                  htmlFor="name"
                >
                  Name:
                </FormLabel>
                <Input
                  mb="10px"
                  p="10px"
                  h="40px"
                  bgColor="#F7F7F7"
                  borderRadius="12px"
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </Flex>
              <Flex direction="column">
                <FormLabel
                  mb="10px"
                  fontSize="20px"
                  fontWeight="500"
                  letterSpacing="0.96px"
                  htmlFor="phoneno"
                >
                  Phone No:
                </FormLabel>
                <Input
                  mb="10px"
                  p="10px"
                  // w="258px"
                  h="40px"
                  bgColor="#F7F7F7"
                  borderRadius="12px"
                  type="number"
                  name="phoneno"
                  id="phoneno"
                  value={phoneno}
                  onChange={(e) => {
                    setPhoneno(e.target.value);
                  }}
                />
              </Flex>
            </Flex>
            <Flex direction="column">
              <FormLabel
                mb="10px"
                fontSize="20px"
                fontWeight="500"
                letterSpacing="0.96px"
                htmlFor="distribution"
              >
                Distribution Name:
              </FormLabel>
              <Input
                mb="10px"
                p="10px"
                h="40px"
                bgColor="#F7F7F7"
                borderRadius="12px"
                type="text"
                name="distribution"
                id="disrtibution"
                value={distribution}
                onChange={(e) => {
                  setDistribution(e.target.value);
                }}
              />
            </Flex>
            <Flex gap="36px">
              <Flex direction="column">
                <FormLabel
                  mb="10px"
                  fontSize="20px"
                  fontWeight="500"
                  letterSpacing="0.96px"
                  htmlFor="email"
                >
                  Email:
                </FormLabel>
                <Input
                  mb="10px"
                  p="10px"
                  h="40px"
                  bgColor="#F7F7F7"
                  borderRadius="12px"
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Flex>
              <Flex direction="column">
                <FormLabel
                  mb="10px"
                  fontSize="20px"
                  fontWeight="500"
                  letterSpacing="0.96px"
                  htmlFor="license"
                >
                  License No#
                </FormLabel>
                <Input
                  mb="10px"
                  p="10px"
                  h="40px"
                  bgColor="#F7F7F7"
                  borderRadius="12px"
                  type="number"
                  name="license"
                  id="license"
                  value={license}
                  // value={valueslue.license}
                  onChange={(e) => {
                    setLicense(e.target.value);
                  }}
                />
              </Flex>
            </Flex>
            <Flex gap="36px">
              <Flex direction="column">
                <FormLabel
                  mb="10px"
                  fontSize="20px"
                  fontWeight="500"
                  letterSpacing="0.96px"
                  htmlFor="passowrd"
                >
                  Password:
                </FormLabel>

                <InputGroup size="md">
                  <Input
                    h="40px"
                    p="10px"
                    bgColor="#F7F7F7"
                    borderRadius="12px"
                    // type="Password"

                    // type="Password"
                    name="password"
                    type={show ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <InputRightElement width="2.5rem">
                    <Button variant="link" onClick={handleClick} mr="15px">
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </Flex>
              <Flex direction="column">
                <FormLabel
                  mb="10px"
                  fontSize="20px"
                  fontWeight="500"
                  letterSpacing="0.96px"
                  htmlFor="confirm"
                >
                  Confirm Password:
                </FormLabel>
                <InputGroup size="md">
                  <Input
                    h="40px"
                    p="10px"
                    bgColor="#F7F7F7"
                    borderRadius="12px"
                    name="confirm"
                    type={show2 ? "text" : "password"}
                    id="confirm"
                    value={confirm}
                    onChange={(e) => {
                      setConfirm(e.target.value);
                    }}
                  />
                  <InputRightElement width="2.5rem">
                    <Button
                      variant="link"
                      onClick={handleClick2}
                      // p="20px"
                      mr="15px"
                      // mt="10px"
                    >
                      {show2 ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </Flex>
            </Flex>
            <Flex direction="column">
              <FormLabel
                mb="10px"
                fontSize="20px"
                fontWeight="500"
                letterSpacing="0.96px"
                htmlFor="address"
              >
                Address:
                <Textarea
                  mb="10px"
                  h="90px"
                  bgColor="#F7F7F7"
                  borderRadius="12px"
                  type="Text"
                  name="address"
                  id="address"
                ></Textarea>
              </FormLabel>
            </Flex>
          </FormControl> */}
          {/* <Flex direction="column" gap="10px">
            <Text fontSize="16px" fontWeight="500">
              Upload Signature:
            </Text>
            <Button
              border="1px solid #484848"
              ml="10px"
              w="180px"
              h="30px"
              borderRadius="12"
              color="#484848"
              variant="outline"
            >
              {" "}
              click to upload image{" "}
            </Button>
            <Text fontSize="16px" fontWeight="500" color="#484848">
              PNG format Supported
            </Text>
          </Flex>
          <Flex direction="column" justifyContent="center" alignItems="center">
            
            <Button
              m="10px"
              bgColor="#28337D"
              color="white"
              w="300px"
              h="50px"
              fontWeight="600"
              fontSize="24px"
              borderRadius="12px"
              _hover="none"
              onClick={handleButtonClick}
            >
              Sign Up
            </Button>
         

            <Text fontSize="20px" fontWeight="500">
              Already have an account?{" "}
              <span style={{ color: "#1E2762" }}>
                {" "}
                <Link href="/Login"> Sign In </Link>
              </span>
            </Text>
          </Flex> */}
        </Flex>
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          gap="73px"
          w="50%"
        >
          <Heading
            fontSize="37px"
            fontWeight="700"
            letterSpacing="3.6px"
            color="#253078"
            mb="60px"
          >
            Sign Up
          </Heading>
          <Heading fontSize="32px" fontWeight="600" letterSpacing="1.92px">
            {" "}
            Arsalan Technologies
          </Heading>
          <Image src="/amico.svg" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SignIn;
