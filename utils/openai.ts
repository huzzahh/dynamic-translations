import { OpenAI } from 'openai';

const config = useRuntimeConfig()
const accessToken = config.openai.apiKey

export const $openai = new OpenAI({ apiKey: accessToken });