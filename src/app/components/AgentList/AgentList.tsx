'use client'

import AgentCard from "../AgentCard"


interface Agent{
  id: string 
  name: string
  description: string 
  status: string
  category: string 
  pricingModel: string
}

export default function AgentList({agents}:{agents: Agent[]}) {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {agents.map((agent) => (
      <AgentCard key={agent.id} agent={agent}/>
    ))}
  </div>
  )
}