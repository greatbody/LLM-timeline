// src/App.tsx

import { CountUpTimer } from "./components/CountUpTimer";
import "./App.css";

function App() {
	// ChatGPT was released on November 30, 2022
	const chatGptReleaseDate = new Date('2022-11-30');
	// DeepSeek-R1 was released on January 20, 2025
	const deepSeekR1ReleaseDate = new Date('2025-01-20');
	// Qwen was first released on August 3, 2023
	const qwenReleaseDate = new Date('2023-08-03');
	// GPT-4 was released on March 14, 2023
	const gpt4ReleaseDate = new Date('2023-03-14');
	// LLaMA (Meta) was first released on February 24, 2023
	const llamaReleaseDate = new Date('2023-02-24');
	// Claude (Anthropic) was first released on March 14, 2023
	const claudeReleaseDate = new Date('2023-03-14');
	// Gemini (Google) was released on December 6, 2023
	const geminiReleaseDate = new Date('2023-12-06');
	// Mistral 7B was released on September 27, 2023
	const mistralReleaseDate = new Date('2023-09-27');
	// Kimi K2 was released on October 24, 2024
	const kimiK2ReleaseDate = new Date('2024-10-24');

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
					startDate={gpt4ReleaseDate}
					title="🚀 GPT-4"
					description="Since OpenAI released GPT-4"
					color="#10a37f"
				/>
				<CountUpTimer
					startDate={llamaReleaseDate}
					title="🦙 LLaMA"
					description="Since Meta released LLaMA"
					color="#0668e1"
				/>
				<CountUpTimer
					startDate={claudeReleaseDate}
					title="🎭 Claude"
					description="Since Anthropic released Claude"
					color="#d97706"
				/>
				<CountUpTimer
					startDate={qwenReleaseDate}
					title="🌟 Qwen"
					description="Since Alibaba Cloud released Qwen LLM"
					color="#ff6b6b"
				/>
				<CountUpTimer
					startDate={mistralReleaseDate}
					title="🌪️ Mistral"
					description="Since Mistral AI released Mistral 7B"
					color="#f97316"
				/>
				<CountUpTimer
					startDate={geminiReleaseDate}
					title="💎 Gemini"
					description="Since Google released Gemini"
					color="#4285f4"
				/>
				<CountUpTimer
					startDate={kimiK2ReleaseDate}
					title="🌙 Kimi K2"
					description="Since Moonshot AI released Kimi K2"
					color="#9333ea"
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
