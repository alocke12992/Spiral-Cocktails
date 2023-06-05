import { IChartData, IIngredient } from "@/types"

const getPieChartData = (ingredients: IIngredient[], totalVolume: number) => {
  const chartData: IChartData[] = []
  if (!totalVolume) {
    return chartData
  }

  ingredients.forEach((ingredient) => {
    // Skip if we weren't able to convert to tsp
    if (!ingredient.measurement?.baseQuantity) {
      return
    }
    const { baseQuantity } = ingredient.measurement

    chartData.push({
      name: ingredient.name,
      value: baseQuantity / totalVolume,
      color: ingredient.color,
    })
  })

  return chartData
}

export default getPieChartData
