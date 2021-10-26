import { ValidationError } from "io-ts";
import { failure } from "io-ts/lib/PathReporter";

/**
 * Transform ValidationError[] into more readable format
 * @param xs Validation errors after decode method
 */
export const validationErrorsToString = (xs: ValidationError[]) =>
  failure(xs).reduce((acc, errStr) => `${acc} - ${errStr}\n`, "");
