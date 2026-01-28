import { Hero } from "@/app/components/hero";
import { Committees } from "@/app/components/committees";
import { Contact } from "@/app/components/contact";
import { RevealAnimation } from "@/app/components/reveal-animation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Partners from "./components/partners";
import { LoadingScreen } from "./components/loading-screen";
import DateAnnouncement from "./components/date-announcement";
import { RouteLoading } from "./components/route-loading";

export default function Home() {
  return (
    <div className="min-h-screen">
      <LoadingScreen />
      <RouteLoading />
      <Hero />
      <RevealAnimation>
        <DateAnnouncement />
      </RevealAnimation>
      <RevealAnimation>
        <div className="flex justify-center py-6">
          <Link href="/register">
            <Button className="px-8 py-3 text-base font-semibold bg-red-600 hover:bg-red-700 rounded-full shadow-lg">
              Priority Round Registrations are open now
            </Button>
          </Link>
        </div>
      </RevealAnimation>
      <RevealAnimation>
        <Committees />
      </RevealAnimation>
      <RevealAnimation>
        <Partners />
      </RevealAnimation>
      <RevealAnimation>
        <Contact />
      </RevealAnimation>
    </div>
  );
}
