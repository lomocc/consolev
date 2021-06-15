export type ConsolevArgMessage = string | boolean | null | undefined;

export type ConsolevArg = [message: ConsolevArgMessage, style?: string];

export type ConsolevArgLike = ConsolevArg | ConsolevArgMessage;

const nodeEnv = process.env.NODE_ENV;

const prefixArgs: ConsolevArg[] = [
  [
    ` ${nodeEnv} `,
    `background-color: ${
      nodeEnv === 'production' ? '#000' : '#f00'
    }; color: #fff;`,
  ],
];

export default function consolev(...args: ConsolevArgLike[]) {
  const consolevArgs = args
    .map((arg) => (Array.isArray(arg) ? arg : ([arg] as ConsolevArg)))
    .filter((arg) => arg[0] !== void 0);

  const optionalArgs = [...prefixArgs, ...consolevArgs];

  const message = '%c%s%c '.repeat(optionalArgs.length);

  const optionalParams = optionalArgs
    .map((arg) => [arg[1] ?? '', arg[0], ''])
    .flat();

  console.log(message, ...optionalParams);
}
