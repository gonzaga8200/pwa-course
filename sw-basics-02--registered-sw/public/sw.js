self.addEventListener('install', function(event){
    console.log('[Service worker] Installing Service worker ...', event);
})

self.addEventListener('activate', function(event){
    console.log('[Service worker] Installing Service worker ...', event);
    return self.clients.claim();
})