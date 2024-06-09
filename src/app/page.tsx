/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { Pages } from "@/components/pageLinks";
// import {data} from "@/data/data"

export default function Home() {
  return (
		<div>
			<h1>Tofara Mususa</h1>
			<h2 className="">Software Engineer</h2>
			<Pages />
			<h3>Bio</h3>
			<p>This is about me</p>
			<h3>Work & Education</h3>
			<p>My name is Alex Bennett, and I am a seasoned software engineer with over a decade of experience in full-stack development, particularly specializing in web technologies. I graduated with a
				 Master's degree in Computer Science from Stanford University, 
				 
				 where I focused on distributed systems and machine learning. Over the years, I have honed my skills in various programming languages, including JavaScript, 
				Python, and Go, while working on a plethora of high-impact projects. 
				In my early career, I contributed to open-source projects, developing libraries and frameworks that are still widely used in the developer community. 
				I have a strong background in backend development, having designed and implemented scalable microservices architectures that handle millions of requests per second. 
				My expertise also extends to frontend development,</p>
			<h3>Website</h3>
			<p>This website was built like this.</p>

		</div>
  );
}
