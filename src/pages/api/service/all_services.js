import { dbConnect } from "@/utils/dbConnect";
import Service from "@/models/Service_model";

const all_services = async (req, res) => {
    if(req.method !== "GET") return res.status(405).end();

    try {
        dbConnect();

        const all_services = await Service.find();

        return res.status(200).json(all_services);
    } catch (error) {
        console.log(error);
    };
};

export default all_services;