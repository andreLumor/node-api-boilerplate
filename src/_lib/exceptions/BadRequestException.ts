import { BaseException, Exception } from "@/_lib/exceptions/BaseException";
import { makePredicate } from "@/_lib/Predicate";

namespace BadRequestException {
  const type = Symbol();
  const code = "BadRequestException";

  export const create = (message: string) => new BaseException({ type, code, message });

  export const is = makePredicate<Exception>(type);
}

export { BadRequestException };
