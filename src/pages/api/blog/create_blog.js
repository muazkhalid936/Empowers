import { dbConnect } from "@/utils/dbConnect";
import Blog from "@/models/Blog_model";
import uploadMiddleware from "@/utils/uploadMiddleware";
import { uploadOnCloudinary } from "@/utils/cloudinary";

export const config = {
  api: { bodyParser: false },
};

export default async function create_blog(req, res) {

  if (req.method !== "POST") return res.status(405).end();
  try {
    await uploadMiddleware(req, res);
    
    const localFilePath = req.file?.path;

    if(!localFilePath) return res.status(400).json("Image are required");
    
    const cloudinaryFilePath = await uploadOnCloudinary(localFilePath);

    await dbConnect();

    const { title, tags, description } = req.body;
    const imageUrl = cloudinaryFilePath?.url;
    const publicId = cloudinaryFilePath?.public_id;
    
    if ([title, tags, description].some((value) => value === "")) {
      return res.status(400).json({ error: "All fields are required" });
    };
    const create_blog = await Blog.create({imageUrl, publicId, title, tags, description})

    res.status(200).json({
        message : "Blog create successfully",
        create_blog
    });

  } catch (error) {
    console.log(error);
  }
}
