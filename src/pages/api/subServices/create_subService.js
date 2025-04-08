import { dbConnect } from "@/utils/dbConnect";
import Sub_Services from "@/models/Sub_services.model";

const create_subServices = async (req,res) => {
     if(req.method !== "POST") return res.status(405).end();
    try {
        dbConnect();
        const {id} = req.query;

        if(!id) return res.status(400).json("ID are required");

        const {subService} = req.body;

        if(!subService) return res.status(400).json("All fields are required");

        const createService = await Sub_Services.create({subService, serviceId : id});

        if(!createService) return res.status(400).json("Service are not created");

        return res.status(201).json({message : "Service created Successfully"});
        
    } catch (error) {
        console.log(error)
    }
}

export default create_subServices;