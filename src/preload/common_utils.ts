import { spawn } from "child_process";

export function evalCommand(
  command: string,
  arg: string[],
  conf?: {
    exit?: (code: number | null, signal: NodeJS.Signals | null) => void;
    error?: (err: Error) => void;
    data?: (chunk: any) => void;
  }
) {
  const cmd = spawn(command, arg || []);
  if (conf && conf.exit) {
    cmd.on("exit", conf.exit);
  }
  if (conf && conf.error) {
    cmd.on("error", conf.error);
  }
  if (conf && conf.data) {
    cmd.stdout.on("data", conf.data);
  }
}

export function evalCommandResultAsBuffer(
  command: string,
  args: string[],
  resultBuffer: Buffer
): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    evalCommand(command, args, {
      data: (chunckBuffer) => {
        resultBuffer = Buffer.concat([resultBuffer, chunckBuffer]);
      },
      exit: async (exitCode) => {
        if (exitCode !== 0) {
          reject([]);
          return;
        }
        resolve(resultBuffer);
        // try {
        //   const resultStr: string = resultBuffer.toString();
        //   const result: ResultItem[] = [];
        //   resultStr.split("\n").forEach((item) => {
        //     if (item) {
        //       result.push({
        //         name: path.basename(item),
        //         path: item,
        //       });
        //     }
        //   });
        //   resultBuffer = null;

        // } catch (err) {
        //   reject(err);
        // }
      },
      error: (err) => {
        reject(err);
      },
    });
  });
}
