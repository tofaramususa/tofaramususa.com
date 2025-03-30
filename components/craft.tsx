import * as React from "react"

import Head from "next/head"
import {type ClassValue,  clsx} from "clsx"
import {twMerge} from "tailwind-merge"

export function cn(...inputs: ClassValue[]) 
{
	return twMerge(clsx(inputs))
}

type LayoutProps = {
	children: React.ReactNode
	className?: string
}

const Layout = ({children, className}: LayoutProps) => {
	return (
		<html
		lang = "en"
		suppressHydrationWarning
		className={cn(
			"no-scrollbar scroll-smooth antialised focus:scroll-auto", className)}
		>
		<Head>
			<link rel="icon" href="/favicon.ico" sizes="any"/>
		</Head>

		{children}
		</html>
	)
}

type MainProps = {
	children: React.ReactNode
	className?: string
}

const Main = ({children, className} : MainProps) =>
{
	return(
		<main className={cn(
			// General Prose
			"prose:font-sans prose prose-neutral max-w-none text-black",
		// Prose Headings
			"prose-headings:mt-8 prose-headings:text-lg prose-headings:font-semibold prose-headings:text-primary prose-h1:mt-0 prose-h1:prose-2xl prose-h2:mt-0 sm:prose-headings:mt-12 sm:prose-h1:mt-0 sm:prose-h2:mt-0 prose-h2:w-fit",
			// Prose Paragraphs
			"prose-p:mb-0",
			// Prose Strong
			"prose-strong:font-semibold",
			// Inline Links
			"prose-a:border-b prose-a:text-muted-foreground prose-a:no-underline prose-a:transition-all hover:prose-a:text-primary",
			// Blockquotes
			"prose-blockquote:not-italic",
			"pb-12 sm:pb-24", className
		)}>
			{children}
		</main>
	)
}
export {Layout, Main}















