// this is where i connnect to the database
import dotenv from 'dotenv';
import mongoose, { connect, ConnectOptions } from 'mongoose';

dotenv.config();

const PASSWORD = process.env.DATABASE_PASSWORD;
const USERNAME = process.env.DATABASE_USERNAME;

const CONNECTION_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.hzzyl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const clientOptions: ConnectOptions = {
  serverApi: { version: '1', strict: true, deprecationErrors: true }
};


const connectToDatabase = async(url: string):Promise<void> =>  {
  try {
    await mongoose.connect(url, clientOptions);
    console.log(`Pinged your deployment. You successfully connected to MongoDB!`);
  } catch (err) {
    console.error('Error connecting to database:', err);
    throw err;
  }
}



const connectToMongodb = () => {
    connectToDatabase(CONNECTION_URL)
}

export default connectToMongodb