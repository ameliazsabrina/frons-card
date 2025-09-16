"use client";
import { Separator } from "@/components/ui/separator";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);
  const paragraphRefs = useRef<HTMLParagraphElement[]>([]);
  const lineRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
          },
        }
      );

      itemRefs.current.forEach((item, index) => {
        if (item) {
          gsap.fromTo(
            item,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: item,
                start: "top 85%",
              },
              delay: index * 0.2,
            }
          );
        }
      });

      paragraphRefs.current.forEach((paragraph, index) => {
        if (paragraph) {
          gsap.fromTo(
            paragraph,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: paragraph.closest('.faq-item'),
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
              },
              delay: index * 0.2,
            }
          );
        }
      });

      lineRefs.current.forEach((line, index) => {
        if (line) {
          gsap.fromTo(
            line,
            { scaleY: 0 },
            {
              scaleY: 1,
              duration: 0.6,
              ease: "power2.out",
              transformOrigin: "top",
              scrollTrigger: {
                trigger: line,
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play none none reverse",
              },
              delay: index * 0.15,
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Separator />
      <section ref={sectionRef} className="bg-neutral-100 py-16">
        <div className="mx-auto max-w-4xl px-8 flex flex-grid grid-cols-2 gap-24 items-start justify-between">
          <div ref={headerRef} className="flex items-center gap-3 mb-16">
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <h2 className="text-gray-600 text-lg font-medium">
              Why You Need It
            </h2>
          </div>

          <div className="space-y-12">
            <div className="faq-item flex items-start gap-8">
              <span className="text-[#16007E] text-xl font-bold">(01)</span>
              <div className="flex-1">
                <h3 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  Seamless Sharing
                </h3>
                <div className="overflow-hidden">
                  <p 
                    ref={(el) => { if (el) paragraphRefs.current[0] = el; }}
                    className="text-lg text-gray-600 leading-relaxed max-w-2xl"
                  >
                    No more typing long links, one tap is enough.
                  </p>
                </div>
              </div>
            </div>

            <div 
              ref={(el) => { if (el) lineRefs.current[0] = el; }}
              className="h-px bg-gray-300"
            ></div>

            <div className="faq-item flex items-start gap-8">
              <span className="text-[#16007E] text-xl font-bold">(02)</span>
              <div className="flex-1">
                <h3 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  Professional Image
                </h3>
                <div className="overflow-hidden">
                  <p 
                    ref={(el) => { if (el) paragraphRefs.current[1] = el; }}
                    className="text-lg text-gray-600 leading-relaxed max-w-2xl"
                  >
                    Stand out with a modern, academic-focused identity card.
                  </p>
                </div>
              </div>
            </div>

            <div 
              ref={(el) => { if (el) lineRefs.current[1] = el; }}
              className="h-px bg-gray-300"
            ></div>

            <div className="faq-item flex items-start gap-8">
              <span className="text-[#16007E] text-xl font-bold">(03)</span>
              <div className="flex-1">
                <h3 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  Update Every 5 Years
                </h3>
                <div className="overflow-hidden">
                  <p 
                    ref={(el) => { if (el) paragraphRefs.current[2] = el; }}
                    className="text-lg text-gray-600 leading-relaxed max-w-2xl"
                  >
                    Profile links can be updated anytime — your card never goes
                    out of date.
                  </p>
                </div>
              </div>
            </div>

            <div 
              ref={(el) => { if (el) lineRefs.current[2] = el; }}
              className="h-px bg-gray-300"
            ></div>

            <div className="faq-item flex items-start gap-8">
              <span className="text-[#16007E] text-xl font-bold">(04)</span>
              <div className="flex-1">
                <h3 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  Made for Academia
                </h3>
                <div className="overflow-hidden">
                  <p 
                    ref={(el) => { if (el) paragraphRefs.current[3] = el; }}
                    className="text-lg text-gray-600 leading-relaxed max-w-2xl"
                  >
                    Perfect for students, researchers, lecturers, and
                    professionals in education.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
