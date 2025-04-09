import mongoose from "mongoose";

const servicesSchema = new mongoose.Schema({
    service : {type:String, required : true},
    submenu : [
        {
            subservice : String
        }
    ]
});

const Service = mongoose.models.Service || mongoose.model("Service", servicesSchema);

export default Service;