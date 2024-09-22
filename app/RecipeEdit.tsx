import React, { useEffect, useState } from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getRecipeById, updateRecipe, addRecipe, getIngredients, MealType, Ingredient, Recipe, RecipeIngredient, addIngredient } from '@/lib/db';

const recipeSchema = z.object({
  name: z.string().min(1, "Recipe name is required"),
  category: z.nativeEnum(MealType),
  ingredients: z.array(z.object({
    id: z.number().optional(),
    name: z.string().min(1, "Ingredient name is required"),
    quantity: z.number().min(0, "Quantity must be positive"),
    units: z.string().optional(),
    details: z.string().optional(),
  })),
  instructions: z.string().min(1, "Instructions are required"),
  photos: z.array(z.string()),
});

type RecipeFormData = z.infer<typeof recipeSchema>;

interface RecipeEditProps {
  recipeId?: number;
  onSave: () => void;
}

export const RecipeEdit: React.FC<RecipeEditProps> = ({ recipeId, onSave }) => {
  const [allIngredients, setAllIngredients] = useState<Ingredient[]>([]);
  
  const { register, control, handleSubmit, setValue, formState: { errors } } = useForm<RecipeFormData>({
    resolver: zodResolver(recipeSchema),
    defaultValues: {
      ingredients: [{ name: '', quantity: 0, units: '' }],
      photos: [''],
    },
  });

  const { fields: ingredientFields, append: appendIngredient, remove: removeIngredient } = useFieldArray({
    control,
    name: "ingredients",
  });

  useEffect(() => {
    const loadIngredients = async () => {
      const ingredients = await getIngredients();
      setAllIngredients(ingredients);
    };
    loadIngredients();

    if (recipeId) {
      const recipe = getRecipeById(recipeId);
      if (recipe) {
        setValue('name', recipe.name);
        setValue('category', recipe.category);
        setValue('ingredients', recipe.ingredients.map(ing => ({
          id: ing.id,
          name: getIngredients().find(i => i.id === ing.id)?.name || '',
          quantity: ing.quantity,
          units: ing.units,
          details: ing.details || '',
        })));
        setValue('instructions', recipe.instructions);
        setValue('photos', recipe.photos);
      }
    }
  }, [recipeId, setValue]);

  const onSubmit = async (data: RecipeFormData) => {
    const recipeData: Recipe = {
      id: recipeId || 0,
      name: data.name,
      category: data.category,
      ingredients: await Promise.all(data.ingredients.map(async (ing) => {
        let ingredientId = ing.id;
        if (!ingredientId) {
          const existingIngredient = allIngredients.find(i => i.name.toLowerCase() === ing.name.toLowerCase());
          if (existingIngredient) {
            ingredientId = existingIngredient.id;
          } else {
            ingredientId = await addIngredient({
              id: 0,
              name: ing.name,
              category: 'Miscellaneous',
            });
          }
        }
        return {
          id: ingredientId,
          quantity: ing.quantity,
          units: ing.units,
          details: ing.details,
        } as RecipeIngredient;
      })),
      instructions: data.instructions,
      photos: data.photos.filter(photo => photo.trim() !== ''),
    };

    if (recipeId) {
      updateRecipe(recipeData);
    } else {
      addRecipe(recipeData);
    }
    onSave();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Input {...register('name')} placeholder="Recipe Name" />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <div>
        <Controller
          name="category"
          control={control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger>
                <SelectValue placeholder="Select meal type" />
              </SelectTrigger>
              <SelectContent>
                {Object.values(MealType).map((type) => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.category && <p className="text-red-500">{errors.category.message}</p>}
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Ingredients</h3>
        {ingredientFields.map((field, index) => (
          <div key={field.id} className="flex space-x-2 mb-2">
            <Input
              {...register(`ingredients.${index}.name` as const)}
              placeholder="Ingredient name"
              list={`ingredients-${index}`}
            />
            <datalist id={`ingredients-${index}`}>
              {allIngredients.map((ing) => (
                <option key={ing.id} value={ing.name} />
              ))}
            </datalist>
            <Input
              {...register(`ingredients.${index}.quantity` as const, { valueAsNumber: true })}
              type="number"
              step="0.01"
              placeholder="Quantity"
            />
            <Input {...register(`ingredients.${index}.units` as const)} placeholder="Units" />
            <Input {...register(`ingredients.${index}.details` as const)} placeholder="Details (optional)" />
            <Button type="button" variant="destructive" onClick={() => removeIngredient(index)}>Remove</Button>
          </div>
        ))}
        <Button type="button" onClick={() => appendIngredient({ name: '', quantity: 0, units: '' })}>Add Ingredient</Button>
      </div>

      <div>
        <Textarea {...register('instructions')} placeholder="Instructions" rows={5} />
        {errors.instructions && <p className="text-red-500">{errors.instructions.message}</p>}
      </div>

      <Button type="submit">Save Recipe</Button>
    </form>
  );
};
