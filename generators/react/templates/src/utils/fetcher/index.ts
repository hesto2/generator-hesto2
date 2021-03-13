/**
 * Custom fetch wrapper:
 * Will throw an error if a response > 300 is returned
 * Accepts a generic type for typing out the response
 */
import { getToken } from '../tokenUtils';

const API_URL = process.env.API_URL || 'https://pleasantpictures.club';
const DEFAULT_BASE_ENDPOINT = process.env.DEFAULT_BASE_ENDPOINT || '/api';

export enum HTTPMethod {
  GET = 'GET',
  PUT = 'PUT',
  POST = 'POST',
  DELETE = 'DELETE',
}

type FetcherResponse<T = unknown> = {
  json: () => Promise<T>;
} & Omit<Response, 'json'>;

type FetcherRequestOptions<T = unknown> = {
  baseEndpoint?: string;
  body?: T;
  url?: string;
  method: HTTPMethod;
} & Omit<RequestInit, 'body' | 'method'>;

export const fetcher = async <T = unknown>(
  endpoint: string,
  options: FetcherRequestOptions
): Promise<FetcherResponse<T>> => {
  const token = getToken();

  const headers: { [key: string]: string } = {
    'Content-Type': 'application/json',
  };
  if (token) {
    headers.authorization = `Bearer ${token}`;
  }

  const body = options.body ? JSON.stringify(options.body) : undefined;
  console.log(options.baseEndpoint, DEFAULT_BASE_ENDPOINT);

  const url = `${options.url ? options.url : API_URL}${
    options.baseEndpoint || DEFAULT_BASE_ENDPOINT
  }${endpoint}`;

  const result = await fetch(url, {
    ...options,
    headers,
    body,
  });

  if (result.status > 300) {
    let message;
    try {
      message = await result.text();
      const json = JSON.parse(message);
      message = json?.message || json;
    } catch (_err) {
      message = _err.message;
    }
    throw new Error(message);
  }
  return result;
};
