import TodoList from "@/features/TodoList";
import getQueryClient from "@/lib/getQueryClient";
import { getTodo } from "@/query/todo-list";
import { dehydrate } from "@tanstack/query-core";
import { Hydrate } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";

export default async function Hydation() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["todo-list"], getTodo);
  const dehydratedState = dehydrate(queryClient);
  return (
    <Hydrate state={dehydratedState}>
      <div>
        <h1 className="text-4xl">TODO LIST</h1>
        <TodoList />
      </div>
    </Hydrate>
  );
}
