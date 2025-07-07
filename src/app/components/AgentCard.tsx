'use client'

import { Card, CardContent } from '@/app/components/ui/card'
import { easeInOut, motion } from 'framer-motion'
import { Bot, DollarSign } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Agent {
  id: string
  name: string
  description: string
  status: string
  category: string
  pricingModel: string
}

const statusColor = {
  Active: 'bg-green-100 text-green-800',
  Beta: 'bg-yellow-100 text-yellow-800',
  Archived: 'bg-gray-200 text-gray-600',
}

export default function AgentCard({ agent }: { agent: Agent }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.80 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: easeInOut }}
      whileHover={{scale:1.03}}
    >
      <Card className="border rounded-2xl h-full hover:shadow-md transition-shadow cursor-pointer  bg-gradient-to-br from-[#d3d8dc] to-[#ebdc7d]">
        <CardContent className=" flex flex-col  flex-1 p-4  space-y-4">
          {/* Top Section: Name + Status */}
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-lg font-semibold leading-snug ">
                {agent.name}
              </h2>
              <p className="text-sm text-muted-foreground">
                {agent.description}
              </p>
            </div>
            <span
              className={cn(
                'text-xs font-medium px-2 py-0.5 rounded-full',
                statusColor[agent.status as keyof typeof statusColor]
              )}
            >
              {agent.status}
            </span>
          </div>

          {/* Divider */}
          <hr className="my-2 border-muted" />

          {/* Bottom Section: Category + Pricing */}
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Bot className="w-4 h-4" />
              {agent.category}
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              {agent.pricingModel}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
