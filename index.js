addEventListener('fetch', event => {
  event.respondWith(handleEvent(event.request))
})

async function handleEvent(request) {
  const lang = request.cf.country.toLowerCase();
  const {pathname, search} = new URL(request.url);
  const [, protocol, path] = request.url.match(/(http[s]?:\/\/)(.+)/) || [];

  lang
    ? (finalURL = `${protocol}${lang}.${path}${pathname}${search}`)
    : (finalURL = `${protocol}${path}${pathname}${search}`)

  return Response.redirect(finalURL, 301);
}
