import Qty from "js-quantities";

import stringToHslColor from "@/lib/utils/stringToHslColor";
import { IIngredientRecord, IDrink } from "@/types";

import extractQtyAndUnit from "./extractQtyAndUnit";

/**
 * 
 * Extract fraction, decimal and integer values from a given string
 *  https://stackoverflow.com/questions/13204242/regular-expression-to-extract-fraction-decimal-and-number-from-a-string
 */
const extractIngredients = (drink: IDrink) => {
  const ingredientMap: IIngredientRecord = {};
  let totalVolume = 0;
  // Parse the drink object and extract the ingredients and measurements
  Object.entries(drink).forEach(([key, value]) => {
    if (key.includes("strIngredient") && value) {
      const i = key.replace("strIngredient", "")
      ingredientMap[i] = { name: value, color: stringToHslColor(value) }
    }

    if (key.includes("strMeasure") && value) {
      const i = key.replace("strMeasure", "")
      if (!ingredientMap?.[i]) {
        return
      }

      const extracted = extractQtyAndUnit(value)

      // if we have a unit and quantity, convert to tsp and add to the total volume
      let baseQuantity = 0
      if (extracted?.unit && extracted?.quantity) {
        const { quantity, unit } = extracted

        // edge case support for "parts"
        // NOTE: I don't like this
        if (unit === 'part') {
          baseQuantity = quantity / 1
        } else {
          try {
            const tsp = Qty(`${quantity} ${unit}`).to('tsp')
            if (tsp?.scalar) {
              baseQuantity = tsp.scalar
              totalVolume += tsp.scalar
            }
          } catch (error) {
            // Swallow error, we don't want the app to crash if we can't parse a measurement
            console.log(error)
          }
        }
      }
      // include the raw measurement in the ingredient object
      ingredientMap[i] = { ...ingredientMap[i], measurement: {
        rawUnit: value.trim(), // Clean this up -> Only set value if this is the strMeasure
        baseQuantity,
        ratio: 0,
      }}
    }
  })
  return { ingredients: Object.values(ingredientMap), totalVolume }
}

export default extractIngredients
