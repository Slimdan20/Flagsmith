"use client";
import Footer from "@/Components/Footer/Footer";
import Homepage from "@/Components/Homepage/Homepage";
import Navbar from "@/Components/Navbar/Navbar";
import Services from "@/Components/Services/Services";
import Order from "@/Components/Order/Order";
import About from "@/Components/About/About";
import { useFlagsmith } from "flagsmith/react";

export default function Home() {
  const flagsmith = useFlagsmith();

  const showOrder = flagsmith.hasFeature("order-page-feature");

  return (
    <main>
      <Navbar />
      <Homepage />
      <Services />
      {showOrder && <Order />}
      <About />
      <Footer />
    </main>
  );
}


