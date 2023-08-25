import * as pk-provider from "@pulumi/pk-provider";

const random = new pk-provider.Random("my-random", { length: 24 });

export const output = random.result;