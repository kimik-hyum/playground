import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { use } from "react";

export async function getTodo() {
  const res = await axios.get("http://127.0.0.1:1337/api/todolists");
  return res.data;
}

export const useTodo = () => {
  return useQuery({
    queryKey: ["hydrate-users"],
    queryFn: () => getTodo(),
  });
};
