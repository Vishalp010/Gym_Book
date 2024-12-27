import mongoose,{Schema,Document} from 'mongoose'

export interface IUser extends Document{
  username: string;
  email : string;
  password : string;
  verifyCode :string;
  verifyCodeExpiry :Date;
  isVerified : boolean;
}

const UserSchema : Schema<IUser> = new Schema({
  username :{
    type :String,
    required : [true, 'username is required'],   // yaha ye array me string me humne error likha h agar username na mile us case k liy
    unique: true,
    trim: true,   //faaltu spaces ko remove krne k liy username k beech se
  },
  email : {
    type : String,
    required: [true,'email is required'],
    unique: true,
    match : [/.+\@.+\..+/ , 'please use a valid email address'],
  },
  password:{
    type : String,
    required :[true,'password is required']
  },
  verifyCode:{
    type : String,
    required : [true,'verify code is required']
  },
  verifyCodeExpiry:{
    type : Date,
    required : [true,'verify code expiry is must']
  },
  isVerified:{
    type : Boolean,
    default : false,
  }
})


const UserModel = (mongoose.models.User as mongoose.Model<IUser>) || mongoose.model<IUser>('User',UserSchema)
export default UserModel
//nextjs ek edge working platform hota h isliy yaha humne jo first condition di h wo ye kehti h ki already running server ho to waha se fetch kre otherwise first time me second condition se