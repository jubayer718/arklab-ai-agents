'use client'
import { BadgeCheck, Bot, DollarSign } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import { easeInOut, motion} from 'framer-motion'
interface Agent {
  id: string
  name: string
  description: string
  status: string
  category: string
  pricingModel: string
}
const AgentCard = ({ agent }: { agent: Agent }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.50 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: easeInOut }}
    
    >
      <Card className="hover:shadow-md transition-shadow hover:scale-105 cursor-pointer">

        <CardContent className="px-4 py-3 ">

          <h2 className="text-xl font-semibold">{agent.name}  </h2>
          <p className="text-sm text-gray-500 mb-2">{agent.description}</p>
          <div className="text-sm space-y-1">
            <p className="flex items-center gap-2"><BadgeCheck className="w-4 h-4" /> {agent.status}</p>
            <p className="flex items-center gap-2"><Bot className="w-4 h-4" /> {agent.category}</p>
            <p className="flex items-center gap-2"><DollarSign className="w-4 h-4"/> {agent.pricingModel}</p>
          </div>

        </CardContent>

      </Card>
    </motion.div>
  );
};

export default AgentCard;