import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../../components/nav.jsx";
//import { auth } from "auth";
import { auth } from "../../auth";

export default async function Home() {
  const session = await auth();
  return <Navbar></Navbar>;
}
