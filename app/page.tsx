'use client'

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DaysOfWeek, removeRecipe, WeekMeals } from "@/lib/db";
import { ShoppingList } from '@/app/ShoppingList';
import { RecipeList } from '@/app/RecipeList';
import { DayPlanner } from '@/app/DayPlanner';
import { RecipeDetail } from '@/app/RecipeDetail';
import { Button } from '@/components/ui/button';
import { useLocalStorage } from '@/lib/utils';
import { RecipeEdit } from '@/app/RecipeEdit';

const daysOfWeek = Object.values(DaysOfWeek);

const ComprehensiveMealPlanner = () => {
  const [meals, setMeals] = useLocalStorage<WeekMeals>("meals", {
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: []
  });

  const [selectedRecipeId, setSelectedRecipeId] = useState<number | null>(null);
  const [editingRecipeId, setEditingRecipeId] = useState<number | null>(null);

  const openRecipeDetail = (recipeId: number) => {
    if (selectedRecipeId === recipeId) {
      setSelectedRecipeId(null);
    } else {
      setSelectedRecipeId(recipeId);
      setEditingRecipeId(null);
    }
  };

  const openRecipeEdit = (recipeId: number | null) => {
    setEditingRecipeId(recipeId);
    setSelectedRecipeId(null);
  };

  const closeRecipeDetail = () => {
    setSelectedRecipeId(null);
  };

  function deleteRecipe(selectedRecipeId: number): void {
    removeRecipe(selectedRecipeId);
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Meal Planner</h1>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <div className="lg:col-span-1 h-screen overflow-y-auto">
          <Card>
            <CardHeader>
              <CardTitle>Recipe List</CardTitle>
              <Button onClick={() => openRecipeEdit(0)}>New Recipe</Button>
            </CardHeader>
            <CardContent>
              <RecipeList onRecipeClick={openRecipeDetail} />
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-3">
          {selectedRecipeId ? (
            <Card>
              <CardHeader>
                <CardTitle>Recipe Details</CardTitle>
                <Button onClick={closeRecipeDetail} className="mb-4 float-right">Close</Button>
                <Button onClick={() => openRecipeEdit(selectedRecipeId)} className="mb-4 float-right">Edit</Button>
                <Button onClick={() => deleteRecipe(selectedRecipeId)} className="mb-4 float-right">Delete</Button>
              </CardHeader>
              <CardContent>
                <RecipeDetail id={selectedRecipeId} />
              </CardContent>
            </Card>
          ) : editingRecipeId !== null ? (
            <Card>
              <CardHeader>
                <CardTitle>{editingRecipeId ? 'Edit Recipe' : 'New Recipe'}</CardTitle>
                <Button onClick={() => setEditingRecipeId(null)} className="mb-4 float-right">Close</Button>
              </CardHeader>
              <CardContent>
                <RecipeEdit
                  recipeId={editingRecipeId === 0 ? undefined : editingRecipeId}
                  onSave={() => {
                    setEditingRecipeId(null);
                    // Optionally, refresh your recipe list or other data here
                  }}
                />
              </CardContent>
            </Card>
          ) : null}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {daysOfWeek.map(day => (
              <DayPlanner key={day} day={day} meals={meals} setMeals={setMeals} onRecipeClick={openRecipeDetail} />
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
