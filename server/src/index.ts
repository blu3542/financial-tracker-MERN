// MongoDB password: BRvKXoAnv21gr17G. Username: btlu03
import express, {Express} from 'express';
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records"
import cors from "cors";

const app: Express = express();

const port = process.env.PORT || 3001

app.use(express.json());
// helps fix crsoss communciation between API server front end
app.use(cors())

const mongoURI: string = "mongodb+srv://btlu03:BRvKXoAnv21gr17G@personalfinancetrackerf.ezzc7.mongodb.net/";


mongoose.connect(mongoURI).then(() => console.log("CONNECTED TO MONGODB!")).catch((err)=>console.error("Failed to Connect", err))
 

app.use("/financial-records", financialRecordRouter)

app.listen(port, () => {
    console.log(`Server Running on Port ${port}`);
  });