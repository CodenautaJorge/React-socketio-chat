import {mongoose} from 'mongoose';

var Schema = mongoose.Schema;

var MessageSchema = new Schema({
    message: String,
    from: String
})

export default mongoose.model('Message', MessageSchema)



