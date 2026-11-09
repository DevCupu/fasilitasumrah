let scriptPromise = null;

export const loadRecaptcha = () => {
  if (window.grecaptcha?.render) return Promise.resolve(window.grecaptcha);
  if (scriptPromise) return scriptPromise;

  let script = document.querySelector('script[data-recaptcha-api]');
  const existingScript = !!script;
  if (!script) {
    script = document.createElement('script');
    script.dataset.recaptchaApi = '';
    script.src = 'https://www.google.com/recaptcha/api.js?render=explicit';
    script.async = true;
    script.defer = true;
  }

  scriptPromise = new Promise((resolve, reject) => {
    let readyQueued = false;
    const timeout = window.setTimeout(() => reject(new Error('reCAPTCHA timed out')), 15000);
    const ready = () => {
      if (readyQueued || !window.grecaptcha?.ready) return;
      readyQueued = true;
      window.grecaptcha.ready(() => {
        window.clearTimeout(timeout);
        if (window.grecaptcha?.render) resolve(window.grecaptcha);
        else reject(new Error('reCAPTCHA API unavailable'));
      });
    };
    script.addEventListener('load', ready, { once: true });
    script.addEventListener('error', () => {
      window.clearTimeout(timeout);
      reject(new Error('reCAPTCHA script failed to load'));
    }, { once: true });
    ready();
    if (!existingScript) document.head.appendChild(script);
  }).catch((error) => {
    script.remove();
    scriptPromise = null;
    throw error;
  });

  return scriptPromise;
};
