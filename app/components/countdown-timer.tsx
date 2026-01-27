 "use client";

import React from "react";

export function CountdownTimer() {
  return (
    <div className="w-full py-10 flex flex-col items-center justify-center">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-center">
        Event timeline
      </h2>
      <p className="text-sm md:text-base text-center text-gray-300 max-w-xl">
        The countdown and full schedule will appear here closer to the
        conference. Event dates will be revealed soon.
      </p>
    </div>
  );
}
