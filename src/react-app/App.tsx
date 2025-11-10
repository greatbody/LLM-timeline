// src/App.tsx

import { CountUpTimer } from "./components/CountUpTimer";
import "./App.css";

function App() {
	// OpenAI releases
	const chatGptReleaseDate = new Date('2022-11-30'); // ChatGPT (GPT-3.5)
	const gpt4ReleaseDate = new Date('2023-03-14'); // GPT-4
	const gpt4TurboReleaseDate = new Date('2023-11-06'); // GPT-4 Turbo
	const gpt4oReleaseDate = new Date('2024-05-13'); // GPT-4o
	const o1ReleaseDate = new Date('2024-09-12'); // o1 (reasoning model)

	// Meta LLaMA releases
	const llama1ReleaseDate = new Date('2023-02-24'); // LLaMA 1
	const llama2ReleaseDate = new Date('2023-07-18'); // LLaMA 2
	const llama3ReleaseDate = new Date('2024-04-18'); // LLaMA 3
	const llama31ReleaseDate = new Date('2024-07-23'); // LLaMA 3.1
	const llama32ReleaseDate = new Date('2024-09-25'); // LLaMA 3.2

	// Anthropic Claude releases
	const claudeReleaseDate = new Date('2023-03-14'); // Claude 1
	const claude2ReleaseDate = new Date('2023-07-11'); // Claude 2
	const claude3OpusReleaseDate = new Date('2024-03-04'); // Claude 3 Opus
	const claude35SonnetReleaseDate = new Date('2024-06-20'); // Claude 3.5 Sonnet

	// Google Gemini releases
	const geminiProReleaseDate = new Date('2023-12-06'); // Gemini Pro
	const gemini15ProReleaseDate = new Date('2024-02-15'); // Gemini 1.5 Pro
	const gemini2FlashReleaseDate = new Date('2024-12-11'); // Gemini 2.0 Flash (experimental)

	// Alibaba Qwen releases
	const qwen7bReleaseDate = new Date('2023-08-03'); // Qwen-7B
	const qwen14bReleaseDate = new Date('2023-09-25'); // Qwen-14B
	const qwen72bReleaseDate = new Date('2023-11-30'); // Qwen-72B & Qwen-1.8B
	const qwen2ReleaseDate = new Date('2024-07-01'); // Qwen2 series
	const qwen25ReleaseDate = new Date('2024-09-19'); // Qwen 2.5
	const qwen25OmniReleaseDate = new Date('2025-03-01'); // Qwen2.5-Omni
	const qwen3ReleaseDate = new Date('2025-04-01'); // Qwen3
	const qwen3CoderReleaseDate = new Date('2025-07-01'); // Qwen3-Coder
	const qwen3PlusReleaseDate = new Date('2025-07-30'); // qwen-plus/flash API
	const qwen3MaxReleaseDate = new Date('2025-09-01'); // Qwen3-Max
	const qwen3VLReleaseDate = new Date('2025-09-23'); // Qwen3-VL

	// Mistral releases
	const mistral7bReleaseDate = new Date('2023-09-27'); // Mistral 7B
	const mixtral8x7bReleaseDate = new Date('2023-12-11'); // Mixtral 8x7B
	const mistralLargeReleaseDate = new Date('2024-02-26'); // Mistral Large

	// DeepSeek releases
	const deepseekCoderReleaseDate = new Date('2023-11-02'); // DeepSeek Coder
	const deepseekV2ReleaseDate = new Date('2024-05-06'); // DeepSeek-V2
	const deepseekV3ReleaseDate = new Date('2024-12-26'); // DeepSeek-V3
	const deepSeekR1ReleaseDate = new Date('2025-01-20'); // DeepSeek-R1

	// Moonshot Kimi releases
	const kimiReleaseDate = new Date('2024-03-18'); // Kimi (original)
	const kimiK2ReleaseDate = new Date('2025-07-11'); // Kimi K2
	const kimiK2InstructReleaseDate = new Date('2025-09-04'); // Kimi-K2-Instruct-0905
	const kimiK2ThinkingReleaseDate = new Date('2025-11-01'); // Kimi K2 Thinking

	return (
		<>
			<div className="app-header">
				<h1>⏰ AI Models Timeline</h1>
				<p>Track time since major AI model releases</p>
			</div>

			<div className="timeline-container">
				<CountUpTimer
					startDate={chatGptReleaseDate}
					title="🤖 ChatGPT (GPT-3.5)"
					description="OpenAI launched ChatGPT"
					color="#00d4aa"
				/>
				<CountUpTimer
					startDate={llama1ReleaseDate}
					title="🦙 LLaMA 1"
					description="Meta released LLaMA (7B-65B)"
					color="#0668e1"
				/>
				<CountUpTimer
					startDate={gpt4ReleaseDate}
					title="🚀 GPT-4"
					description="OpenAI released GPT-4"
					color="#10a37f"
				/>
				<CountUpTimer
					startDate={claudeReleaseDate}
					title="🎭 Claude 1"
					description="Anthropic released Claude"
					color="#d97706"
				/>
				<CountUpTimer
					startDate={claude2ReleaseDate}
					title="🎭 Claude 2"
					description="Anthropic released Claude 2 with 100K context"
					color="#d97706"
				/>
				<CountUpTimer
					startDate={llama2ReleaseDate}
					title="🦙 LLaMA 2"
					description="Meta released LLaMA 2 (7B-70B)"
					color="#0668e1"
				/>
				<CountUpTimer
					startDate={qwen7bReleaseDate}
					title="🌟 Qwen-7B"
					description="Alibaba Cloud released Qwen-7B"
					color="#ff6b6b"
				/>
				<CountUpTimer
					startDate={qwen14bReleaseDate}
					title="🌟 Qwen-14B"
					description="Alibaba released Qwen-14B"
					color="#ff6b6b"
				/>
				<CountUpTimer
					startDate={mistral7bReleaseDate}
					title="🌪️ Mistral 7B"
					description="Mistral AI released Mistral 7B"
					color="#f97316"
				/>
				<CountUpTimer
					startDate={deepseekCoderReleaseDate}
					title="🧠 DeepSeek Coder"
					description="DeepSeek released coding model"
					color="#646cff"
				/>
				<CountUpTimer
					startDate={gpt4TurboReleaseDate}
					title="🚀 GPT-4 Turbo"
					description="OpenAI released GPT-4 Turbo with 128K context"
					color="#10a37f"
				/>
				<CountUpTimer
					startDate={qwen72bReleaseDate}
					title="🌟 Qwen-72B"
					description="Alibaba released Qwen-72B & Qwen-1.8B"
					color="#ff6b6b"
				/>
				<CountUpTimer
					startDate={geminiProReleaseDate}
					title="💎 Gemini Pro"
					description="Google released Gemini Pro"
					color="#4285f4"
				/>
				<CountUpTimer
					startDate={mixtral8x7bReleaseDate}
					title="🌪️ Mixtral 8x7B"
					description="Mistral AI released MoE model"
					color="#f97316"
				/>
				<CountUpTimer
					startDate={gemini15ProReleaseDate}
					title="💎 Gemini 1.5 Pro"
					description="Google released Gemini 1.5 with 1M context"
					color="#4285f4"
				/>
				<CountUpTimer
					startDate={mistralLargeReleaseDate}
					title="🌪️ Mistral Large"
					description="Mistral AI released flagship model"
					color="#f97316"
				/>
				<CountUpTimer
					startDate={claude3OpusReleaseDate}
					title="🎭 Claude 3 Opus"
					description="Anthropic released Claude 3 family"
					color="#d97706"
				/>
				<CountUpTimer
					startDate={kimiReleaseDate}
					title="🌙 Kimi"
					description="Moonshot AI released Kimi with 200K context"
					color="#9333ea"
				/>
				<CountUpTimer
					startDate={llama3ReleaseDate}
					title="🦙 LLaMA 3"
					description="Meta released LLaMA 3 (8B, 70B)"
					color="#0668e1"
				/>
				<CountUpTimer
					startDate={deepseekV2ReleaseDate}
					title="🧠 DeepSeek-V2"
					description="DeepSeek released V2 MoE model"
					color="#646cff"
				/>
				<CountUpTimer
					startDate={gpt4oReleaseDate}
					title="🚀 GPT-4o"
					description="OpenAI released multimodal GPT-4o"
					color="#10a37f"
				/>
				<CountUpTimer
					startDate={qwen2ReleaseDate}
					title="🌟 Qwen2"
					description="Alibaba released Qwen2 series (7B-72B)"
					color="#ff6b6b"
				/>
				<CountUpTimer
					startDate={claude35SonnetReleaseDate}
					title="🎭 Claude 3.5 Sonnet"
					description="Anthropic released Claude 3.5 Sonnet"
					color="#d97706"
				/>
				<CountUpTimer
					startDate={llama31ReleaseDate}
					title="🦙 LLaMA 3.1"
					description="Meta released LLaMA 3.1 (405B)"
					color="#0668e1"
				/>
				<CountUpTimer
					startDate={o1ReleaseDate}
					title="🚀 o1"
					description="OpenAI released o1 reasoning model"
					color="#10a37f"
				/>
				<CountUpTimer
					startDate={llama32ReleaseDate}
					title="🦙 LLaMA 3.2"
					description="Meta released LLaMA 3.2 with vision"
					color="#0668e1"
				/>
				<CountUpTimer
					startDate={qwen25ReleaseDate}
					title="� Qwen 2.5"
					description="Alibaba released Qwen 2.5"
					color="#ff6b6b"
				/>
				<CountUpTimer
					startDate={gemini2FlashReleaseDate}
					title="💎 Gemini 2.0 Flash"
					description="Google released Gemini 2.0 (experimental)"
					color="#4285f4"
				/>
				<CountUpTimer
					startDate={deepseekV3ReleaseDate}
					title="🧠 DeepSeek-V3"
					description="DeepSeek released V3 (685B MoE)"
					color="#646cff"
				/>
				<CountUpTimer
					startDate={deepSeekR1ReleaseDate}
					title="🧠 DeepSeek-R1"
					description="DeepSeek released reasoning model"
					color="#646cff"
				/>
				<CountUpTimer
					startDate={qwen25OmniReleaseDate}
					title="🌟 Qwen2.5-Omni"
					description="Alibaba released Qwen2.5-Omni multimodal model"
					color="#ff6b6b"
				/>
				<CountUpTimer
					startDate={qwen3ReleaseDate}
					title="🌟 Qwen3"
					description="Alibaba released Qwen3 (up to 235B parameters)"
					color="#ff6b6b"
				/>
				<CountUpTimer
					startDate={qwen3CoderReleaseDate}
					title="🌟 Qwen3-Coder"
					description="Alibaba released Qwen3-Coder specialized for coding"
					color="#ff6b6b"
				/>
				<CountUpTimer
					startDate={kimiK2ReleaseDate}
					title="🌙 Kimi K2"
					description="Moonshot AI released Kimi K2"
					color="#9333ea"
				/>
				<CountUpTimer
					startDate={qwen3PlusReleaseDate}
					title="🌟 Qwen-Plus/Flash API"
					description="Alibaba released public API services"
					color="#ff6b6b"
				/>
				<CountUpTimer
					startDate={kimiK2InstructReleaseDate}
					title="🌙 Kimi-K2-Instruct"
					description="Moonshot AI released K2-Instruct-0905"
					color="#9333ea"
				/>
				<CountUpTimer
					startDate={qwen3MaxReleaseDate}
					title="🌟 Qwen3-Max"
					description="Alibaba released Qwen3-Max flagship model"
					color="#ff6b6b"
				/>
				<CountUpTimer
					startDate={qwen3VLReleaseDate}
					title="🌟 Qwen3-VL"
					description="Alibaba released Qwen3 vision-language models"
					color="#ff6b6b"
				/>
				<CountUpTimer
					startDate={kimiK2ThinkingReleaseDate}
					title="🌙 Kimi K2 Thinking"
					description="Moonshot AI released K2 Thinking version"
					color="#9333ea"
				/>
			</div>
		</>
	);
}

export default App;
