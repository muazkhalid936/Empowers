import { dbConnect } from "@/utils/dbConnect";
import Service from "@/models/Service_model";

const  delete_service = async (req, res) => {
    if(req.method !== "DELETE") return res.status(405).end();
console.log("delete_service", req.query);
    try {
        dbConnect();

        const {id} = req.query;

        if(!id) return res.status(400).json("ID are required");

        const delete_service = await Service.findByIdAndDelete(id);

        if(!delete_service) return res.status(400).json("Service not found");

        return res.status(200).json("Service delete successfully")
    } catch (error) {
        console.log(error);
    }
}

export default delete_service;