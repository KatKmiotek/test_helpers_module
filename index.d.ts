import { Page } from "@playwright/test";

export function getCognitoToken(): string;
export function waitForResponse(
  page: Page,
  url: string,
  statusCode: number,
): Promise<void>;
export function printHello(name: string): string;
