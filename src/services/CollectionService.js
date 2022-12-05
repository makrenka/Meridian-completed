import { COLLECTIONS } from '../MOCK/collections'

class CollectionService {
    getAllCollections() {
        return Promise.resolve({ data: COLLECTIONS })
    }
}

export const collectionService = new CollectionService();