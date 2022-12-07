import { COLLECTIONS } from '../MOCK/collections';
import { COLLECTIONS_TWO } from '../MOCK/collections';

class CollectionService {
    getAllCollections() {
        return Promise.resolve({ data: COLLECTIONS, data2: COLLECTIONS_TWO })
    }
}

export const collectionService = new CollectionService();