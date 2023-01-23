import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Carousel from "Components/Carousel/Carousel";
import Category from "Components/Category/Category";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Carousel></Carousel>
      <Category></Category>
    </>
  );
}
