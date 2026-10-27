import { describe, expect, it } from "vitest";
import { isValidPostalCode, validatePostalCode } from "../src/postal-code.js";

describe("Romanian postal code", () => {
  it("accepts exactly six digits and rejects other formats", () => {
    expect(validatePostalCode("010101")).toEqual({ valid: true, error: null, data: { postalCode: "010101" } });
    expect(isValidPostalCode("12345")).toBe(false);
    expect(isValidPostalCode("1234567")).toBe(false);
    expect(isValidPostalCode("12345a")).toBe(false);
  });

  it("ignores spaces, like the other validators", () => {
    expect(validatePostalCode(" 010 101 ").data).toEqual({ postalCode: "010101" });
  });

  it("explains what is wrong", () => {
    expect(validatePostalCode("1234").error).toContain("exact 6 cifre");
  });
});
