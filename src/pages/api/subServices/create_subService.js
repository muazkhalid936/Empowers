import { dbConnect } from "@/utils/dbConnect";
import Sub_Services from "@/models/Sub_services.model";
import Service from "@/models/Service_model";

const create_subServices = async (req,res) => {
     if(req.method !== "POST") return res.status(405).end();
    try {
        dbConnect();
        const {id} = req.query;

        if(!id) return res.status(400).json("ID are required");

        const {subService} = req.body;

        // if(!subService) return res.status(400).json("All fields are required");

        // const createService = await Sub_Services.create({subService, serviceId : id});

        // if(!createService) return res.status(400).json("Service are not created");

        const addSubMenu = await Service.findByIdAndUpdate(id,{
            $push : {submenu : {subservice : subService}}
        },{new : true});

        if(!addSubMenu) return res.status(400).json("Service are not added");

        return res.status(201).json({message : "Service created Successfully",addSubMenu});
        
    } catch (error) {
        console.log(error)
    }
}

export default create_subServices;