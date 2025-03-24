import { dbConnect } from "@/utils/dbConnect";
import Training from "@/models/Training_model";
import uploadMiddleware from "@/utils/uploadMiddleware";
import { uploadOnCloudinary } from "@/utils/cloudinary";

export const config = {
    api : {bodyParser : false}
}

export default async function create_training (req, res) {
    if(req.method !== "POST") return res.status(405).end();

    try {
         await uploadMiddleware(req, res);
            
            const localFilePath = req.file?.path;
        
            if(!localFilePath) return res.status(400).json("Image are required");
            
            const cloudinaryFilePath = await uploadOnCloudinary(localFilePath);

        dbConnect();

        const {trainingName, trainingDetails} = req.body;
        const imageUrl = cloudinaryFilePath?.url;
        const publicId = cloudinaryFilePath?.public_id;

        if([trainingDetails, trainingName].some(value => value === !value)) {return "All field are required"}

        const createTraining = await Training.create({imageUrl, publicId, trainingName, trainingDetails});

        return res.status(200).json({message : "Training details add successfully", createTraining});
        
    } catch (error) {
        console.log(error)
    }

}