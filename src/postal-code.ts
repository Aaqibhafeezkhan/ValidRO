import { fail, ok, type ValidationResult } from "./result.js";

export interface PostalCodeInfo {
  postalCode: string;
}

/** Validates the six-digit format of a Romanian postal code. */
export function validatePostalCode(input: string): ValidationResult<PostalCodeInfo> {
  if (typeof input !== "string") return fail("Codul poștal trebuie să fie un șir de caractere");
  if (!/^\d{6}$/.test(input)) return fail("Codul poștal trebuie să conțină exact 6 cifre");
  return ok({ postalCode: input });
}

export const isValidPostalCode = (input: string): boolean => validatePostalCode(input).valid;
