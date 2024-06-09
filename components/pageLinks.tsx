import data from "@/lib/data"
import Link from "next/link"
import { FileInput } from "lucide-react"


const Pages = () => {
  return (
    <div className="grid">
		<h3 className="text-foreground">Sections</h3>
		<div className="grid grid-cols-2 gap-3 md:grid-cols-2">
			{
				data.areas.map((link) => (
					<Link 
						className="not-prose p-3 group flex items-center justify-between gap-1 rounded border text-base transition-all bg-accent/30 text-foreground hover:bg-accent/60 hover:text-foreground"
						key={link.label}
						href={link.href}
					>
						{link.label}
						<FileInput size={16} 
						className="text-accent/75 transition-all group-hover:text-foreground/75"/>
					</Link>
				))
			}
		</div>
    </div>
  )
}


export {Pages}



