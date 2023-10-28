import { expect, test } from "vitest";
import { getCognitoToken, printHello } from "../lib/main";

test("test printHello", () => {
  const result = printHello("TestJs");
  expect(result).toBe("Hello TestJs!");
});

test("test Cognito", () => {
  process.env.COGNITO_CLIENT_SECRET = "1234";
  process.env.COGNITO_CLIENT_ID = "5678";
  const result = getCognitoToken();
  expect(result).toBeTypeOf("string");
  expect(result).toBe("NTY3ODoxMjM0");
});
