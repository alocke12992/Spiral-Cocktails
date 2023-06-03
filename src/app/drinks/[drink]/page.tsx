import { Suspense } from "react";

import { drinks } from "@/lib/api";
import extractIngredients from "./lib/extracIngredients";
import getPieChartData from "./lib/getPieChartData";
import DrinkView from './components/DrinkView'

interface IDrinkPageProps {
  params: {
    drink: string
  }
}

const DrinkPage: React.FC<IDrinkPageProps> = async ({ params: { drink } }) => {
  const drinkData = await drinks.getById(drink)

  if (!drinkData) {
    return <div>Drink not found</div>
  }
  const { ingredients, totalVolume } = extractIngredients(drinkData)
  const chartData = getPieChartData(ingredients, totalVolume)

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DrinkView drinkData={drinkData} ingredients={ingredients} chartData={chartData} />
    </Suspense>
  )
}

export default DrinkPage
