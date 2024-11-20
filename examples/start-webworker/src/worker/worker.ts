globalThis.addEventListener('message', (event) => {
  const data = event.data;

  let result: string;
  if (typeof data !== 'string') {
    result = 'Invalid input';
  } else {
    result = data.toUpperCase();
  }

  globalThis.postMessage(result);
});
