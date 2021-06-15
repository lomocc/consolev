export type ConsolevArg = [message: string, style?: string] | string;

const nodeEnv = process.env.NODE_ENV;

export default function consolev(...args: ConsolevArg[]) {
  args = args
    .map((arg) => (Array.isArray(arg) ? arg : ([arg] as ConsolevArg)))
    .filter((arg) => arg[0] !== void 0);

  const prefixArgs: ConsolevArg[] = [
    [
      ` ${nodeEnv} `,
      `background-color: ${
        nodeEnv === 'production' ? '#000' : '#f00'
      }; color: #fff;`,
    ],
  ];
  const optionalArgs = [...prefixArgs, ...args];
  const message = '%c%s%c '.repeat(optionalArgs.length);

  const optionalParams = optionalArgs
    .map((arg) => [arg[1] ?? '', arg[0], ''])
    .flat();

  console.log(message, ...optionalParams);
}
