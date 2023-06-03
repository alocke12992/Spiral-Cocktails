export interface IIngredientMeasurement {
  rawUnit: string
  baseQuantity?: number // The quantity converted to the base unit (tsp)
  ratio?: number
}

export interface IIngredient {
  name: string
  color: string
  measurement?: IIngredientMeasurement
}

export type IIngredientRecord = Record<string, IIngredient>

export interface IChartData {
  name: string
  value: number
  color: string
}