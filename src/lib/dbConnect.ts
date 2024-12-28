import mongoose from "mongoose"

type ConnectionObject ={
  isConnected?: number
}

const connection : ConnectionObject ={}

async function dbConnect() : Promise<void>  {
  if(connection.isConnected){
    console.log('database is already connected')
    return
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || '')
    connection.isConnected = db.connections[0].readyState    //db connect hote hi hume connections array milti h jo ki connection related status ki array hoti h jsime se ye readystate ek number hota h 
    console.log('db connected succesfully')
  } catch (error) {
    console.log('db connection failed',error)

    process.exit(1)   //jb connection establish ni hua isliy hum db se exit hore h
  }
}


export default dbConnect;