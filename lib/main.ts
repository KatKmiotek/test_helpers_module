import { Page, Response } from "@playwright/test";

export async function waitForResponse(
  page: Page,
  url: string,
  statusCode: number,
): Promise<void> {
  await page.waitForResponse(
    (resp: Response) =>
      resp.url().includes(url) && resp.status() === statusCode,
  );
}

export function getCognitoToken(): string {
  const username = process.env.COGNITO_CLIENT_ID;
  const password = process.env.COGNITO_CLIENT_SECRET;

  const credentials = `${username}:${password}`;

  const base64Credentials = btoa(credentials);

  return base64Credentials;
}
