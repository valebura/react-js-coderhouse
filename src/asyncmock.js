const items = [{
        id: 1,
        nombre: "mate",
        precio: 30000,
        stock: 10,
        categoria: "mate"
    },
    {
        id: 2,
        nombre: "zapato",
        precio: 3000,
        stock: 13,
        categoria: "calzado"
    },
    {
        id: 3,
        nombre: "termo",
        precio: 60000,
        stock: 10,
        categoria: "mate"
    },
    {
        id: 4,
        nombre: "zapatilla",
        precio: 300000,
        stock: 1,
        categoria: "calzado"
    },
    {
        id: 5,
        nombre: "zapatilla",
        precio: 300000,
        stock: 1,
        categoria: "calzado"
    },
    {
        id: 6,
        nombre: "zapatilla",
        precio: 300000,
        stock: 1,
        categoria: "calzado"
    },
    {
        id: 7,
        nombre: "zapatilla",
        precio: 300000,
        stock: 1,
        categoria: "calzado"
    },
]


export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(items)
        }, 2000);
    })
}