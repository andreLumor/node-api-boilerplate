import { Container } from "@/container";
import { Configuration } from "@/config";

type InitFunction = (container: Container, config: Configuration) => Promise<void>;

const makeAppInitializer =
  (container: Container, config: Configuration) =>
  async (...fns: InitFunction[]): Promise<void> => {
    await fns.reduce(
      (promise: Promise<any>, fn: InitFunction) => promise.then(() => fn(container, config)),
      Promise.resolve()
    );
  };

enum Lifecycle {
  BOOTING = "booting",
  BOOTED = "booted",
}

export { InitFunction, makeAppInitializer, Lifecycle };
