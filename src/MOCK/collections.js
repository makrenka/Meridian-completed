const generateCollection1 = (qty) => {
    return new Array(qty).fill(null).map((_, index) => ({
        id: index,
        title: `Collection ${index + 1}`,
        poster: `collection-${index + 1}-section-1.jpg`,
        classname: `homepage-main__product-section-card-${index + 1}`,
        altname: `collection-${index + 1}-img`,
    }));
};

export const COLLECTIONS = generateCollection1(5);

const generateCollection2 = (qty) => {
    return new Array(qty).fill(null).map((_, index) => ({
        id: index,
        title: `Collection ${index + 1}`,
        poster: `collection-${index + 1}-section-2.jpg`,
        classname: `homepage-main__product-section-card-${index + 1}`,
        altname: `collection-${index + 1}-img`,
    }));
};

export const COLLECTIONS_TWO = generateCollection2(5);
