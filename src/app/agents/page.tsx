// import { promises as fs } from 'fs'
// import path from 'path'
import AgentList from '@/app/components/AgentList/AgentList'
import mockAgents from '../../../data/mock-agents.json'
// import { store } from '@/lib/store/store'
// import { setAgents } from '@/redux/agentSlice'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ArkLab AI Agents Catalog',
  description: 'Discover a wide range of intelligent AI agents by category, pricing and status.',
}

export default async function AgentsPage() {
  // Delay to simulate network
  await new Promise((resolve) => setTimeout(resolve, 1000))


  // const filePath = path.join(process.cwd(), 'data', 'mock-agents.json')
  // const jsonData = await fs.readFile(filePath, 'utf-8')
  // const agents = JSON.parse(jsonData);


  return (
    <main className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">AI Agent Catalog</h1>
      <AgentList initialAgents={ mockAgents} />
    </main>
  )
}
