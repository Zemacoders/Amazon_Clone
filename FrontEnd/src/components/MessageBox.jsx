import React from 'react';
import { cn } from '../utils/cn';

export default function MessageBox({ children , type}) {
  return (
    <div className={cn(
        "p-4 rounded-md font-medium",
        type === "error" && "bg-red-300 text-white",
        type === "success" && "bg-green-300 text-white",
        type === "warning" && "bg-yellow-300 text-gray-800"
    )}>
      {children}
    </div>
  );
}
