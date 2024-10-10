"use client"

import { useToast } from "./use-toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <div className="fixed top-0 right-0 p-4 space-y-4">
      {toasts.map(({ id, title, description, variant }) => (
        <div
          key={id}
          className={`p-4 rounded-md shadow-md ${
            variant === 'destructive' ? 'bg-red-500 text-white' : 'bg-white text-black'
          }`}
        >
          <h3 className="font-bold">{title}</h3>
          {description && <p>{description}</p>}
        </div>
      ))}
    </div>
  )
}