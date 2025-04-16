import { dbConnect } from "@/utils/dbConnect";
import TrainingMenu from "@/models/Training_menus_model";

const create_trainingMenu = async (req, res) => {
    if(req.method !== "POST") return res.status(405).end();

    try {
        dbConnect();
        const {Training_Menu} = req.body;

        if(!Training_Menu){
            return res.status(400).json("Training Menu are required");
        };

        const create_trainingMenu = await TrainingMenu.create({Training_Menu});

        return res.status(200).json({message : "service add successfully" , create_trainingMenu});

    } catch (error) {
        console.log(error);
    }
};

export default create_trainingMenu;