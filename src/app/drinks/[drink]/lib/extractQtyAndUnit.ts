
interface IExtractQtyAndUnit {
  quantity: number;
  unit: string;
}

// js-quantities doesn't support 'oz'  or 'shot' as a unit, so we convert them to 'fluid-ounce'
// NOTE: For extensibility, might want to convert to a map
const CONVERT_TO_FLUID_OZ: string[] = ['shot', 'shots', 'oz'];

const extractQtyAndUnit = (measurement: string): IExtractQtyAndUnit | undefined => {
  const matched = measurement.match(/\d+([\/.]\d+)?/g);
  if (!matched?.length) {
    return;
  }

  // Join quantity so we can extract the unit from the original measurement
  const quantityStr = matched.join(' ');
  const rawUnit = measurement.replace(quantityStr, '').trim().toLowerCase();
  
  // To ensure we have the correct quantity
  // Convert each matched value to a float and combine them to get our total quantity as a float
  const rawQuantity = matched.reduce((current, val) => {
    try {
      const num = eval(val.trim());
      return current + num;
    } catch (e) {
      console.error('Failed to parse matched value ' + val, e)
      return current;
    }
  }, 0);


  const unit = CONVERT_TO_FLUID_OZ.includes(rawUnit) ? 'fluid-ounce' : rawUnit;
  let quantity = rawQuantity;

  if (['shot', 'shots'].includes(rawUnit)) {
    quantity = rawQuantity * 1.5;
  }

  return {
    quantity,
    unit,
  }
}

export default extractQtyAndUnit;
