"use client";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BlurText from "@/components/ui/blurtext";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  return (
    <div className="min-h-screen bg-neutral-100 relative">
      <div className="absolute z-10 flex flex-col justify-center px-12 py-16 max-w-2xl h-full">
        <BlurText
          text="Tap to Connect"
          delay={250}
          animateBy="words"
          direction="bottom"
          className="text-6xl md:text-7xl  font-semibold text-gray-900 mb-6 leading-tight"
        />
        {/* <h1 className="text-6xl md:text-7xl  font-bold text-gray-900 mb-6 leading-tight">
          Tap to <em className="italic font-light">Connect</em>
        </h1> */}

        <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-lg">
          Fronsciers NFC Card is a smart NFC business card designed for
          academia. With just a single tap, anyone can instantly access your
          academic profile page — no apps, no hassle.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="#order">
            <button className="bg-gray-900 text-white hover:bg-gray-800 font-medium px-8 py-3 rounded-xl transition-all duration-200">
              Get Your Card
            </button>
          </Link>
          <Link href="https://www.fronsciers.com" target="_blank">
            <button className="text-gray-900 border border-gray-300 hover:bg-gray-50 font-medium px-8 py-3 rounded-xl flex items-center transition-all duration-200">
              <ArrowUpRight className="w-4 h-4 mr-2" />
              Publish at Fronsciers
            </button>
          </Link>
        </div>
      </div>

      <div className="absolute right-0 top-0 w-1/2 h-full">
        <Image
          src="/card-hero2.png"
          alt="background"
          fill
          className="object-cover object-left"
        />
      </div>
    </div>
  );
}
