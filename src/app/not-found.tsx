import Link from "next/link";

export default function NotFound()
{
	return(
		<div>
			<h1>Dear amazing viewer,</h1>
			<p>I&apos;m sorry, but the page you are looking for does not exist yet....</p>
			<p>l am currently building it out step by step but for now  you can check out <Link href="/">homepage</Link>.</p>
		</div>
	)
}