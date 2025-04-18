import mongoose from "mongoose";

const trainingSchema = new mongoose.Schema({
    imageUrl : {type : String},
    publicId : {type : String},
    trainingName : {type : String},
    trainingCategory : {type : String, required : true},
    trainingDetails : {type : [String], default : []}
},{timestamps : true});

const Training = mongoose.models.Training || mongoose.model("Training", trainingSchema);

export default Training;