'use client'

import { Card, CardContent } from '@/app/components/ui/card'
import { easeInOut, motion } from 'framer-motion'
import { Bot, DollarSign } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useState } from 'react'

interface Agent {
  id: string
  name: string
  description: string
  status: string
  category: string
  pricingModel: string
}



const categoryBackgrounds: Record<string, string> = {
  'Customer Service': 'bg-gradient-to-br from-teal-50 to-white',
  'Marketing': 'bg-gradient-to-br from-pink-50 to-white',
  'Development': 'bg-gradient-to-br from-blue-50 to-white',
  'Data Analysis': 'bg-gradient-to-br from-yellow-50 to-white',
  'Human Resources': 'bg-gradient-to-br from-purple-50 to-white',
  'Finance': 'bg-gradient-to-br from-emerald-50 to-white',
  'Legal': 'bg-gradient-to-br from-slate-50 to-white',
  'Operations': 'bg-gradient-to-br from-indigo-50 to-white',
};


const categoryHoverBackgrounds: Record<string, string> = {
  'Customer Service': 'hover:from-teal-100',
  'Marketing': 'hover:from-pink-100',
  'Development': 'hover:from-blue-100',
  'Data Analysis': 'hover:from-yellow-100',
  'Human Resources': 'hover:from-purple-100',
  'Finance': 'hover:from-emerald-100',
  'Legal': 'hover:from-slate-100',
  'Operations': 'hover:from-indigo-100',
};


const statusColor = {
  Active: 'bg-green-100 text-green-800',
  Beta: 'bg-yellow-100 text-yellow-800',
  Archived: 'bg-gray-200 text-gray-600',
}

export default function AgentCard({ agent }: { agent: Agent }) {

  const [expanded, setExpanded] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.80 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: easeInOut }}
      whileHover={{ scale: 1.03 }}
    >
      <Card className={cn('border rounded-2xl h-full hover:shadow-md transition-shadow cursor-pointer', categoryBackgrounds[agent.category] || 'bg-white',
        categoryHoverBackgrounds[agent.category] || ''
      )}>
        <CardContent className=" flex flex-col  flex-1 p-4  space-y-4">
          {/* Top Section: Name + Status */}
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-lg font-semibold leading-snug ">
                {agent.name}
              </h2>
              <p className="text-sm text-muted-foreground">
                {expanded
                  ? agent.description
                  : agent.description.slice(0, 80) }
                {agent.description.length > 80 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // prevent card click if needed
                      setExpanded(!expanded);
                    }}
                    className="text-primary ml-2 "
                  >
                    {expanded ? 'Show Less' : '...Read More'}
                  </button>
                )}
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
