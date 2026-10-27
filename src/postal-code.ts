import { clean, fail, ok, type ValidationResult } from "./result.js";

export interface PostalCodeInfo {
  postalCode: string;
}

/** Validates the six-digit format of a Romanian postal code. Spaces, dots and dashes are ignored. */
export function validatePostalCode(input: string): ValidationResult<PostalCodeInfo> {
  if (typeof input !== "string") return fail("Codul poștal trebuie să fie un șir de caractere");
  const postalCode = clean(input);
  if (!/^\d{6}$/.test(postalCode)) return fail("Codul poștal trebuie să conțină exact 6 cifre");
  return ok({ postalCode });
}

export const isValidPostalCode = (input: string): boolean => validatePostalCode(input).valid;
