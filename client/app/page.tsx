"use client"
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
    <Navbar open={open} setOpen={setOpen}/>
    {!open && (
      <>
      <Hero/>
      <Section1/>
      <Section2/>
      </>
    )
    }
    </>
  );
}
