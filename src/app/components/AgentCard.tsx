import { Card, CardContent } from "./ui/card"

interface Agent {
  id: string
  name: string
  description: string
  status: string
  category: string
  pricingModel: string
}
const AgentCard = ({agent}:{agent:Agent}) => {
  return (
    <Card className="hover:shadow-md transition-shadow">

      <CardContent className="p-4">

        <h2 className="text-xl font-semibold">{agent.name}  </h2>
        <p className="text-sm text-gray-500 mb-2">{agent.description}</p>
        <div className="text-sm space-y-1">
          <p><strong>Status:</strong> {agent.status}</p>
          <p><strong>Category:</strong> {agent.category}</p>
          <p><strong>Pricing:</strong> {agent.pricingModel}</p>
        </div>

      </CardContent>

    </Card>
  );
};

export default AgentCard;