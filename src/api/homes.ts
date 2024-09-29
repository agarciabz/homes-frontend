import { API } from "../utils/consts";

interface HomeRawData {
  id: string;
  title_es: string;
  description_es: string;
  city: string;
  country: string;
  price_amount: string;
  currency_code: string;
  available_now: boolean;
  m2: number;
}

export interface Home {
  id: string;
  titleEs: string;
  descriptionEs: string;
  city: string;
  country: string;
  priceAmount: string;
  availableNow: string;
  m2: number;
}

export const mapResponse = (data: HomeRawData): Home => ({
  ...data,
  titleEs: data.title_es,
  descriptionEs: data.description_es,
  priceAmount: `${data.price_amount} ${data.currency_code}`,
  availableNow: data.available_now ? "Yes" : "No",
});

export interface SearchResponse {
  count: number;
  data: HomeRawData[];
}

export interface ErrorResponse {
  errorMessage: string;
}

export type ApiResponse = SearchResponse | ErrorResponse;

export const responseIsError = (res: ApiResponse): res is ErrorResponse =>
  Object.prototype.hasOwnProperty.call(res, "errorMessage");

export const searchHomes = async (amount: number): Promise<ApiResponse> => {
  try {
    const res = await fetch(`${API}/search`, {
      method: "POST",
      body: JSON.stringify({ amount }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const body = res.json();
    return body;
  } catch (err) {
    console.log(err);
    return {
      errorMessage: err as string,
    };
  }
};
