import { Suspense } from "react";

import { drinks } from "@/lib/api";

import extractIngredients from "./lib/extractIngredients";
import getPieChartData from "./lib/getPieChartData";

import styles from './styles.module.css';

import DrinkImage from "./components/DrinkImage";
import Header from "./components/Header";
import Ingredients from "./components/Ingredients";

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
      <div className="wrapper">
        <Header drinkName={drinkData.strDrink} />
        <div className={styles.content}>
          <DrinkImage drinkName={drinkData.strDrink} drinkImage={drinkData.strDrinkThumb} />
          <Ingredients chartData={chartData} ingredients={ingredients} />
          <p className="left-align">
            {drinkData.strInstructions}
          </p>
        </div>
      </div>
    </Suspense>
  )
}

export default DrinkPage
