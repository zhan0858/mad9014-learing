(() => {
    let cachesStorage = caches.open('my-cache1');
    caches.open('my-cache2')
        .then(cache => {
            let urlString = "https://picsum.photos/id/1/200/300";
            cache.add(urlString)

            let images = ['https://picsum.photos/id/10/200/300', 'https://picsum.photos/id/100/200/300'];
            cache.addAll(images)
            // cache.add(url);

            let url = new URL(`${urlString}?id=two`);
            cache.add(url);

            cache.keys().then(keys => {
                console.log('keys === ', keys);
                keys.forEach((key, index) => {
                    console.log('keys === ', index, key);
                    // cache.delete(key);
                })
            })

            return cache;
        }).then((cache) => {
            const fetchURL = 'https://picsum.photos/id/123/200/300';
            cache.match(fetchURL).then(response => {
                if (response && response.status === 200) {
                    console.log('cache exists ', response, response.url);
                    return response.blob()
                } else {
                    console.log('cache not exists ', response);
                    return fetch(fetchURL).then(res => {
                        if (!res.ok) {
                            throw new Error('response not ok');
                        }
                        cache.put(fetchURL, res.clone());
                        return res.blob();
                    })
                }
            }).then(blob => {
                console.log('blob === ', blob);
                let url = URL.createObjectURL(blob);
                console.log('url === ', url);
            })
        })
})()