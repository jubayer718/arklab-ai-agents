 /* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store/store';
import AgentCard from '../AgentCard';
import { Agent, setAgents } from '@/redux/agentSlice';
import { useEffect } from 'react';
import FilterBar from './FilterBar';

type Props = {
  initialAgents: Agent[];
};

export default function AgentList({ initialAgents }: Props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAgents(initialAgents));
  }, [initialAgents]);

  const {
    agents,
    search,
    statusFilter,
    categoryFilter,
    pricingModelFilter,
  } = useSelector((state: RootState) => state.agent);

  const filteredAgents = agents.filter((agent) => {
    const matchSearch =
      agent.name.toLowerCase().includes(search.toLowerCase()) ||
      agent.description.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter.length === 0 || statusFilter.includes(agent.status);

    const matchesCategory =
      categoryFilter.length === 0 || categoryFilter.includes(agent.category);

    const matchesPricing =
      !pricingModelFilter || agent.pricingModel === pricingModelFilter;

    return matchSearch && matchesStatus && matchesCategory && matchesPricing;
  });

  return (
    <>
    <FilterBar/>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {filteredAgents.map((agent) => (
        <AgentCard key={agent.id} agent={agent} />
      ))}
    </div>
    </>
  );
}
