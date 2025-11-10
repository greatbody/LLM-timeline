// src/App.tsx

import { CountUpTimer } from "./components/CountUpTimer";
import "./App.css";

function App() {
	// ChatGPT was released on November 30, 2022
	const chatGptReleaseDate = new Date('2022-11-30');
	// DeepSeek-R1 was released on January 20, 2025
	const deepSeekR1ReleaseDate = new Date('2025-01-20');

	return (
		<>
			<div className="app-header">
				<h1>⏰ Count-Up Timers</h1>
				<p>Track time since important milestones</p>
			</div>

			<div className="timers-container">
				<CountUpTimer
					startDate={chatGptReleaseDate}
					title="🤖 ChatGPT Era"
					description="Since OpenAI launched ChatGPT to the world"
					color="#00d4aa"
				/>
				<CountUpTimer
					startDate={deepSeekR1ReleaseDate}
					title="🧠 DeepSeek-R1"
					description="Since DeepSeek released their reasoning model"
					color="#646cff"
				/>
			</div>
		</>
	);
}

export default App;
