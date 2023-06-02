import { IDrink, ISearchDrinksPayload } from "@/types/drinks";
import { ROOT_URL } from "./config";

// https://www.newline.co/@bespoyasov/how-to-use-fetch-with-typescript--a81ac257
export const search = async (name: string): Promise<ISearchDrinksPayload | undefined> => {
  try {
    const data = await fetch(`${ROOT_URL}/search.php?s=${name}`);
    return await data.json() as ISearchDrinksPayload;
  } catch (error) {
    console.log(error);
    return
  }
}

export const getById = async (id: string): Promise<IDrink | undefined> => {
  try {
    const res = await fetch(`${ROOT_URL}/lookup.php?i=${id}`);
    const json = await res.json();
    if (!json?.drinks || !json.drinks.length) {
      throw new Error('No drinks found')
    }
    return json.drinks[0] as IDrink;
  } catch (error) {
    console.log(error);
    return
  }
}
