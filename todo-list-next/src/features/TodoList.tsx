"use client";

import { useTodo } from "@/query/todo-list";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

export default function TodoList() {
  const { data } = useTodo();
  const list = data?.data;

  return <main></main>;
}
