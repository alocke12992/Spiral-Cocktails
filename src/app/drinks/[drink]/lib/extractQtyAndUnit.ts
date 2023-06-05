
interface IExtractQtyAndUnit {
  quantity: number;
  unit: string;
}

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
  const quantity = matched.reduce((current, val) => {
    try {
      const num = eval(val.trim());
      return current + num;
    } catch (e) {
      console.error('Failed to parse matched value ' + val, e)
      return current;
    }
  }, 0);

  // Hack: js-quantities doesn't support 'oz'
  const unit = rawUnit === 'oz' ? 'fluid-ounce' : rawUnit;
  return {
    quantity,
    unit,
  }
}

export default extractQtyAndUnit;
