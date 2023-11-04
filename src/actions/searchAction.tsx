import { redirect } from "react-router-dom";
import { ActionFunctionArgs } from "@remix-run/router/utils.ts";

export const searchAction = async ({ request }: ActionFunctionArgs) => {
  const data = await request.formData();
  const identifier = data.get("pokemonIdentifier");

  const name = identifier?.toString().toLowerCase();

  return redirect(`/search/${name}`);
};
