const CACHE='menu-de-casa-v7';
const CORE=['./','index.html','styles.css','recipe-images.js','app.js','manifest.webmanifest','icon-192.png','icon-512.png','b2bfcb23-3e89-4f53-946b-8729515bc8c8.png','data/receitas-01.json','data/receitas-02.json','data/receitas-03.json','data/receitas-04.json','data/receitas-05.json','data/receitas-06.json'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)))});
self.addEventListener('activate',e=>e.waitUntil(Promise.all([caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))),self.clients.claim()])));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(fetch(e.request).then(res=>{const copy=res.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return res}).catch(()=>caches.match(e.request))) });
