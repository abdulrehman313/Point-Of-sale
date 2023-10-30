"use client";

import Image from "next/image";
import styles from "./page.module.css";
import SignIn from "./Sign-up/page";
import LogIn from "./Login/page";
import HomePage from "./Home/page";
import Side from "./Components/Side";

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}
