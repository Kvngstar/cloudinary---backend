var cloudinary = require("cloudinary").v2

cloudinary.config({
    cloud_name:"",
    api_key:"",
    api_secret: ""
})

const opts = {
    overwrite: true,
    invalidate: true,
    resource_type: "auto"
}
module.exports = async (image)=>{

   
     const response =  await cloudinary.uploader.upload(image,opts)
    console.log("response",response)
        if(response && response.secure_url){
            console.log(response.secure_url)
            return response.secure_url
        }
    }
    
 

   
