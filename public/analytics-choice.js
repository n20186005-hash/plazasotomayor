(() => {
  const measurementId = 'G-HXM22WWPKP';
  const banner = document.querySelector('[data-cookie-banner]');
  const open = document.querySelector('[data-cookie-open]');
  let loaded = false;
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window['ga-disable-' + measurementId] = true;
  window.gtag('consent', 'default', { analytics_storage: 'denied' });
  const choose = (granted) => {
    window['ga-disable-' + measurementId] = !granted;
    window.gtag('consent', 'update', { analytics_storage: granted ? 'granted' : 'denied' });
    if (granted && !loaded) {
      loaded = true;
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      script.dataset.ga4 = measurementId;
      document.head.appendChild(script);
      window.gtag('js', new Date());
      window.gtag('config', measurementId);
    }
    banner?.setAttribute('hidden', '');
    open?.removeAttribute('hidden');
  };
  document.querySelector('[data-cookie-accept]')?.addEventListener('click', () => choose(true));
  document.querySelector('[data-cookie-reject]')?.addEventListener('click', () => choose(false));
  open?.addEventListener('click', () => {
    banner?.removeAttribute('hidden');
    open.setAttribute('hidden', '');
  });
})();
