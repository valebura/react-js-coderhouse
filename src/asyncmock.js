const items = [{
        id: 1,
        nombre: "Intel Core I3",
        precio: 50000,
        stock: 25,
        categoria: "procesadores",
        image: "https://fullh4rd.com.ar/img/productos/1/micro-intel-core-i3-14100-cvideo-ccooler-s1700-0.jpg"
    },
    {
        id: 2,
        nombre: "Geforce GTX 1650 4GB",
        precio: 185000,
        stock: 13,
        categoria: "placas",
        image: "https://fullh4rd.com.ar/img/productos/3/video-geforce-gtx-1650-4gb-msi-ventus-xs-oc-0.jpg"
    },
    {
        id: 3,
        nombre: "RAM Corsair 8GB DDR4",
        precio: 30000,
        stock: 24,
        categoria: "memorias",
        image: "https://fullh4rd.com.ar/img/productos/4/memoria-8gb-ddr4-3000-corsair-vengeance-lpx-q-2666-0.jpg"
    },
    {
        id: 4,
        nombre: "Intel Core I5",
        precio: 103000,
        stock: 62,
        categoria: "procesadores",
        image: "https://fullh4rd.com.ar/img/productos/1/micro-intel-core-i5-13400f-svideo-ccooler-s1700-0.jpg"
    },
    {
        id: 5,
        nombre: "Geforce RTX 3050 6GB",
        precio: 285000,
        stock: 15,
        categoria: "placas",
        image: "https://fullh4rd.com.ar/img/productos/3/video-geforce-rtx-3050-6gb-msi-gaming-x-0.jpg"
    },
    {
        id: 6,
        nombre: "RAM Kingston 16GB DDR4",
        precio: 300000,
        stock: 74,
        categoria: "memorias",
        image: "https://fullh4rd.com.ar/img/productos/4/memoria-16gb-ddr4-3600-kingston-fury-beast-0.jpg"
    },
    {
        id: 7,
        nombre: "AMD Ryzen 7",
        precio: 254000,
        stock: 32,
        categoria: "procesadores",
        image: "https://fullh4rd.com.ar/img/productos/1/micro-amd-ryzen-7-5700g-0.jpg"
    },
    {
        id: 8,
        nombre: "Radeon RX 6700 12GB",
        precio: 650000,
        stock: 7,
        categoria: "placas",
        image: "https://fullh4rd.com.ar/img/productos/3/video-radeon-rx-6700-xt-12gb-asus-dual-0.jpg"
    },
    {
        id: 9,
        nombre: "RAM XPG 32GB DDR4",
        precio: 300000,
        stock: 13,
        categoria: "memorias",
        image: "https://fullh4rd.com.ar/img/productos/4/memoria-32gb-ddr4-3600-adata-xpg-spectrix-d50-rgb-white-0.jpg"
    },
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(items)
        }, 2000);
    })
}

export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(items.find(e => e.id === id * 1))
        }, 500);
    })
}