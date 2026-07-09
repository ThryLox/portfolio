"use client";

import React from "react";
import { Printer } from "lucide-react";

export function PrintButton() {
  return (
    <button 
      onClick={() => window.print()}
      className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded shadow text-sm font-medium transition-colors"
    >
      <Printer className="w-4 h-4" />
      Print / Save PDF
    </button>
  );
}
