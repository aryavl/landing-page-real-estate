"use client"
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
    <Navbar open={open} setOpen={setOpen}/>
    {!open && (
      <>
      <Hero/>
      
      </>
    )
    }
    </>
  );
}
