import mongoose,{ Schema, model } from 'mongoose';


const authorSchema = new Schema({
    name: { type: String, required: true },
    bio: { type: String },
    birthDate:{type: Date, required: true },
    wroteBooks: [{ type: mongoose.Types.ObjectId, ref: 'Book' }]
})

export const Author = model('Author', authorSchema);