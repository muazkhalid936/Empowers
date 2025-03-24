import { dbConnect } from "@/utils/dbConnect";
import Contact from "@/models/contact_model";


const delete_form = async (req, res) => {
    if(req.method !== "DELETE") return res.status(405).end();

    try {

        dbConnect();
        
        const {id} = req.query;

        if(!id) {
            return res.status(400).json("ID are required");
        };

        const delete_form = await Contact.findByIdAndDelete(id);

        if(!delete_form) {
            return res.status(400).json("contact not found");
        };

        return res.status(200).json({message : "contact delete successfully", delete_form});

    } catch (error) {
        console.log(error);
    }
};

export default delete_form;