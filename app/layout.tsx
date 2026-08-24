import type {Metadata} from "next";import "./globals.css";
export const metadata:Metadata={title:"Tru Legacy Mechanics Check",description:"Valorant Mobile training-ground mechanics evaluation and player grading tool.",other:{"codex-preview":"development"},icons:{icon:"/favicon.svg",shortcut:"/favicon.svg"}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
