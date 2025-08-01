"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRef, useEffect } from "react";

const HeroSection = () => {
  const imageRef = useRef(null); 

  useEffect(() => {
    const imageElement=imageRef.current;
    const handleScroll= () =>{
        const scrollPosition=window.scrollY;
        const scrollThreshold=100;
        if(scrollPosition>scrollThreshold){
            imageElement.classList.add("scrolled");
        }else {
            imageElement.classList.remove("scrolled");
        }
    };
    window.addEventListener("scroll",handleScroll); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full pt-36 md:pt-48 pb-10 min-h-screen">
        <div className="space-y-6 text-center">
            <div className="space-y-6 mx-auto ">
                <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient gradient-title"> AI Powered  Career  Guide  to <br />Professional Success</h1>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">Take your career to the next level with personalized guidance, industry insights, interview preparation, and smart AI tools. </p>
            </div>
            <div className="flex justify-center space-x-4">
                <Link href="/dashboard">
                  <Button size="lg" className="px-8 cursor-pointer"> Get Started </Button>
                </Link>
                <Link href="https://youtu.be/YLabeLxKn0c">
                  <Button size="lg" className="px-8 cursor-pointer" variant="outline"> Watch Demo </Button>
                </Link>
            </div>
            <div className="hero-image-wrapper mt-5 md:mt-0">
                <div ref={imageRef} className="hero-image">
                    <Image src={"/banner.png"} width={1280} height={720} alt="Banner HireGenie" className="rounded-lg shadow-2xl border mx-auto" priority /> 
                </div>
            </div>
        </div>
    </section>
  );
};

export default HeroSection;
