'use client'

import { useDispatch, useSelector } from "react-redux";
import {
  setSearch,
  setStatusFilter,
  setCategoryFilter,
  setPricingModelFilter,
  clearAllFilters
} from '@/redux/agentSlice';


import { RootState } from "@/redux/store/store";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
// import { useState } from "react";

export default function FilterBar() {
  const dispatch = useDispatch();
  const {
    search,
    statusFilter,
    categoryFilter,
    pricingModelFilter
  } = useSelector((state: RootState) => state.agent);

  const statuses = ['Active', 'Beta', 'Archived'];
  const categories = [
    'Customer Service',
    'Marketing',
    'Development',
    'Operations',
    'Data Analysis',
    'Finance',
    'Legal',
    'Human Resources',
  ];
  const pricingModels = ['Free Tier', 'Subscription', 'Per-Use'];


  return (
    <div className="space-y-4 mb-4">
      <Input
        placeholder="Search by name or description..."
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />

      <div className="flex flex-wrap gap-2">
        {statuses.map((status) => (
          <Button
            key={status}
            variant={statusFilter.includes(status) ? 'default' : 'outline'}
            onClick={() => {
              const updated = statusFilter.includes(status)
                ? statusFilter.filter((s) => s !== status)
                : [...statusFilter, status];
              dispatch(setStatusFilter(updated));
            }}
          >
            {status}
          </Button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={categoryFilter.includes(cat) ? 'default' : 'outline'}
            onClick={() => {
              const updated = categoryFilter.includes(cat)
                ? categoryFilter.filter((c) => c !== cat)
                : [...categoryFilter, cat];
              dispatch(setCategoryFilter(updated));
            }}
          >
            {cat}
          </Button>
        ))}
      </div>

      <div className="flex gap-2 flex-wrap">
        {pricingModels.map((model) => (
          <Button
            key={model}
            variant={pricingModelFilter === model ? 'default' : 'outline'}
            onClick={() => dispatch(setPricingModelFilter(model))}
          >
            {model}
          </Button>
        ))}
        {pricingModelFilter && (
          <Button variant="ghost" onClick={() => dispatch(setPricingModelFilter(''))}>
            Clear Pricing
          </Button>
        )}
      </div>

      <Button variant="destructive" onClick={() => dispatch(clearAllFilters())}>
        Clear All Filters
      </Button>
    </div>
  );






}