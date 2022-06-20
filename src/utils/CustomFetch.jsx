import Products from '../utils/Products'

export const customFetch = (time, task) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(task);
        }, time);
    });
}

export const getProductsById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Products.find(product => product.id === id));
        }, 500);
    });
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Products.filter(product => product.category === category));
        }, 500);
    });
}