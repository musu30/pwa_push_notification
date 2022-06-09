console.warn("ws file in public")
let cacheData="appV1";
this.addEventListener("install",(event)=>{
    event.waitUntil(
        caches.open(cacheData).then((cache)=>{
            cache.addAll([
                '/static/js/bundle.js',
                '/index.html',
                '/',
                "/users"

            ])
        })
    )
})
this.addEventListener("fetch",(event)=>{



    if(!navigator.onLine){
        if (event.request.url === "http://localhost:3000/static/js/main.chunk.js") {
            event.waitUntil(
                this.registration.showNotification("Internet", {
                    body: "internet not working",
                })
            )
        }
        event.respondWith(
            caches.match(event.request).then((res)=>{
                if(res){
                    return res;
                }
                let requestUrl=event.request.clone();
                fetch(requestUrl);
            })
        )
    }
 
})