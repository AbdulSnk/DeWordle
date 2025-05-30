"use client";

import API from "@/utils/axios";
import { useMutation } from "@tanstack/react-query";

const URL = "/words";

export function useGetWord() {
  return useMutation({
    mutationFn: () => API.get("/words/daily"),
  });
}

export function useValidateGuess() {
  return useMutation({
    mutationFn: (guess) => API.get(`${URL}/guess/${guess}`),
  });
}
