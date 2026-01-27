"use client";

import Image from "next/image";
import { RouteLoading } from "@/app/components/route-loading";

export default function AIPPMLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <RouteLoading />
      <div className="min-h-screen bg-black text-white">
        <div className="relative w-full h-[30vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh]">
          <Image
            src="/images/committees/aippm.png"
            alt="AIPPM"
            fill
            className="object-cover"
            priority
            quality={100}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold text-white/90 tracking-wider drop-shadow-2xl">
              AIPPM
            </h1>
          </div>
        </div>

        <div className="container mx-auto px-4 mt-8">{children}</div>
      </div>
    </>
  );
}
