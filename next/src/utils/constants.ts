import { ENGLISH } from "./languages";
import type { ModelSettings } from "../types";

export const GPT_35_TURBO = "gpt-3.5-turbo" as const;
export const GPT_4 = "gpt-4" as const;
export const GPT_MODEL_NAMES = [GPT_35_TURBO, GPT_4];

export const DEFAULT_MAX_LOOPS_CUSTOM_API_KEY = 10 as const;

export const getDefaultModelSettings = (): ModelSettings => {
  return {
    customApiKey: "",
    language: ENGLISH,
    customModelName: GPT_35_TURBO,
    maxTokens: 1250,
  };
};
