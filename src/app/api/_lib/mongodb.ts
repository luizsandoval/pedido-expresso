import { MongoClient } from 'mongodb';

if (!process.env.MONGODB_URI) {
    throw new Error('Please add your Mongo URI to .env.local');
}

const uri: string = process.env.MONGODB_URI;

let mongoClient: MongoClient;
let mongoClientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
    let globalWithMongoClientPromise = global as typeof globalThis & {
        _mongoClientPromise: Promise<MongoClient>;
    };

    if (!globalWithMongoClientPromise._mongoClientPromise) {
        mongoClient = new MongoClient(uri);
        globalWithMongoClientPromise._mongoClientPromise =
            mongoClient.connect();
    }

    mongoClientPromise = globalWithMongoClientPromise._mongoClientPromise;
} else {
    mongoClient = new MongoClient(uri);
    mongoClientPromise = mongoClient.connect();
}

export { mongoClientPromise };
