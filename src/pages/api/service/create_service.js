import { dbConnect } from "@/utils/dbConnect";
import Service from "@/models/Service_model";

const create_service = async (req, res) => {
    if(req.method !== "POST") return res.status(405).end();

    try {
        dbConnect();
        const {service} = req.body;

        if(!service){
            return res.status(400).json("service are required");
        };

        const create_service = await Service.create({service});

        return res.status(200).json({message : "service add successfully" , create_service});

    } catch (error) {
        console.log(error);
    }
};

export default create_service;