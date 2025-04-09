import { dbConnect } from "@/utils/dbConnect";
import Sub_Services from "@/models/Sub_services.model";

const all_subServices = async (req, res) => {
    if(req.method !== "GET") return res.status(405).end();
    try {
        await dbConnect();
        const all_subServices = await Sub_Services.find();
        return res.status(200).json(all_subServices);
    } catch (error) {
        console.log(error);
    }
}

export default all_subServices;