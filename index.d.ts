import { Page } from "@playwright/test";

export function setupCounter(element: HTMLButtonElement): void;
export function getCognitoToken(): string;
export function waitForResponse(
  page: Page,
  url: string,
  statusCode: number,
): Promise<void>;
