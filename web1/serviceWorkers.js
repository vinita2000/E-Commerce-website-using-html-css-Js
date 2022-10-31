const staticDevCoffee = "furniture-Shop"
const assets = [
  "",
  "/web1/index.html",
  "/web1/style.css",
  "/web1/main.js",
  "/images/furnitures.png",
  "/images/bed1.jpg",
  "/images/bed2.jpg",
  "/images/bed3.jpg",
  "/images/bed4.jpg",
  "/images/bed5.jpg",
  "/images/mirror1.jpg",
  "/images/mirror2.jpg",
  "/images/mirror3.jpg",
  "/images/mirror4.jpg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})

