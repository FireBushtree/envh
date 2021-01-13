export const loadJavascript = (url: string) =>
  new Promise((resolve) => {
    const scriptEl = document.createElement('script');
    scriptEl.type = 'text/javascript';
    scriptEl.src = url;
    scriptEl.onload = () => {
      resolve(null);
    };
    document.body.appendChild(scriptEl);
  });
