// src/App.tsx

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import cloudflareLogo from "./assets/Cloudflare_Logo.svg";
import honoLogo from "./assets/hono.svg";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);
	const [name, setName] = useState("unknown");

	return (
		<>
			<h1>Vite + React + Hono + Cloudflare</h1>
			<a href="https://vite.dev" target="_blank">Vite
			</a>
			<a href="https://react.dev" target="_blank">React
			</a>
			<a href="https://hono.dev/" target="_blank">Hono
			</a>
			<a href="https://workers.cloudflare.com/" target="_blank">Cloudflare</a>

			<div className="card">
				<button
					onClick={() => setCount((count) => count + 1)}
					aria-label="increment"
				>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<div className="card">
				<button
					onClick={() => {
						fetch("/api/")
							.then((res) => res.json() as Promise<{ name: string }>)
							.then((data) => setName(data.name));
					}}
					aria-label="get name"
				>
					Name from API is: {name}
				</button>
				<p>
					Edit <code>worker/index.ts</code> to change the name
				</p>
			</div>
			<p className="read-the-docs">Click on the logos to learn more</p>
			<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML" target="_blank">HTML（超文本标记语言）</a>
			<a href="https://zh.javascript.info/intro" target="_blank">JavaScript</a>
			<a href="https://leetcode.com" target="_blank">Leetcode</a>
		</>
	);
}

export default App;
