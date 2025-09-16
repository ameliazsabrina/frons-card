"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { IoPhonePortrait, IoEye, IoShareSocial } from "react-icons/io5";
export default function HowItWorks() {
  const modelContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    import("@/app/script").catch((err) =>
      console.error("Failed to load script:", err)
    );
  }, []);

  return (
    <>
      <section className="howitworks-section bg-primary min-h-screen">
        <div className="header-1">
          <h1>How It Works</h1>
        </div>
        <div className="header-2">
          <h1>Fronsciers Card</h1>
        </div>
        <div className="circular-mask"></div>
        <div className="tooltips">
          <div className="tooltip tooltip-top-left">
            <div className="icon">
              <IoPhonePortrait />
            </div>

            <div className="title">
              <h2>Scan the Card</h2>
            </div>
            <div className="description">
              <p>Tap with NFC-enabled phone</p>
            </div>
          </div>
          <div className="tooltip tooltip-middle-right">
            <div className="icon">
              <IoEye />
            </div>

            <div className="title">
              <h2>View Profile</h2>
            </div>
            <div className="description">
              <p>Instantly open your academic page</p>
            </div>
          </div>
          <div className="tooltip tooltip-down-left">
            <div className="icon">
              <IoShareSocial />
            </div>

            <div className="title">
              <h2>Connect Instantly</h2>
            </div>
            <div className="description">
              <p>Share research, portfolio, or contact</p>
            </div>
          </div>
        </div>
        <div className="model-container mb-16" ref={modelContainerRef}></div>
        <div className="relative z-[200] mx-auto max-w-4xl px-8 text-center mt-32 pb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Want to purchase one?
          </h2>
          <p className="text-lg text-white/80 mb-8 leading-relaxed">
            Create an account at fronsciers.com and get your card only for{" "}
            <span className="text-white font-semibold">Rp225.000</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="https://fronsciers.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-background/90 transition-colors duration-300 flex items-center gap-2"
            >
              Visit Fronsciers.com
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
