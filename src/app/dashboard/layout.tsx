// import { Sidebar } from "../../components"

import { Sidebar } from "@/components"

export const metadata = {
  title: 'Dashboard-Red vial Guayas',
  description: 'Dashboard-Red vial Guayas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white ">
      <div className="flex">
        <Sidebar />
        <div className=" w-full text-slate-900">
          {children}
        </div>
      </div>
    </div>
  )
}
