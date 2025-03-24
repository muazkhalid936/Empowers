import { dbConnect } from "@/utils/dbConnect";
import Service from "@/models/Service_model";


const update_service = async (req, res) => {
    if(req.method !== "PATCH") return res.status(405).end();

    try {

        dbConnect();

        const {id} = req.query;
        const {service} = req.body;

        if(!id) {
            return res.status(400).json("ID are required");
        };

        const update_service = await Service.findByIdAndUpdate(id,{$set : {service}},{new : true});
        
        if(!update_service) {
            return res.status(400).json("Service not found");
        }

        return res.status(200).json(update_service);
    } catch (error) {
        console.log(error)
    }
};

export default update_service;