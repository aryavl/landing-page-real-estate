import mongoose, { Schema } from 'mongoose'

const SuscribeSchema = new Schema({
    
    
    email:{
        type:String,
        required: true,
        unique:true
    }, 
    
},
{timestamps:true}
)
 
export default mongoose.models.Suscribe || mongoose.model("Suscribe",SuscribeSchema)