'use client'

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DaysOfWeek, WeekMeals } from "@/lib/types";
import { ShoppingList } from '@/app/ShoppingList';
import { RecipeList } from '@/app/RecipeList';
import { DayPlanner } from '@/app/DayPlanner';

const _ = {
  breakfast: 'bg-yellow-200',
  lunch: 'bg-green-200',
  dinner: 'bg-blue-200',
  dessert: 'bg-purple-200'
};

const daysOfWeek = Object.values(DaysOfWeek);

const ComprehensiveMealPlanner = () => {
  const [meals, setMeals] = useState<WeekMeals>({
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: []
  });

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Comprehensive Meal Planner</h1>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Recipe List</CardTitle>
            </CardHeader>
            <CardContent>
              <RecipeList />
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {daysOfWeek.map(day => (
              <DayPlanner key={day} day={day} meals={meals} setMeals={setMeals} />
            ))}
          </div>
        </div>
        <div className="lg:col-span-1">
          <ShoppingList meals={meals} />
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveMealPlanner;
