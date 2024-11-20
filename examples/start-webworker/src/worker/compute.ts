const worker = new Worker(new URL('./worker.ts', import.meta.url));

export function compute(str: string): Promise<string> {
  return new Promise((resolve) => {
    worker.postMessage(str);
    worker.onmessage = ({ data }) => {
      resolve(data);
    };
  });
}
