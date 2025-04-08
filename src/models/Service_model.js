import mongoose from "mongoose";

const servicesSchema = new mongoose.Schema({
    service : {type:String, required : true},
});

const Service = mongoose.models.Service || mongoose.model("Service", servicesSchema);

export default Service;