
import AgentList from '@/app/components/AgentList/AgentList'
import mockAgents from '../../../data/mock-agents.json';
// import { redirect } from 'next/navigation';
// import { auth } from '@/lib/auth';

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ArkLab AI Agents Catalog',
  description: 'Discover a wide range of intelligent AI agents by category, pricing and status.',
}

export default async function AgentsPage() {
  // const session = await auth();
  // if (!session) {
  //   redirect('/');
  // }
  // Delay to simulate network
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return (
    <main className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">AI Agent Catalog</h1>
      <AgentList initialAgents={ mockAgents} />
    </main>
  )
}
