export const relaxingImages = ["https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg","https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_1280.jpg","https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg","https://cdn.pixabay.com/photo/2015/07/09/22/45/tree-838667_1280.jpg"]


export const randomImage =()=>{
    
    let randomNumber = Math.floor(Math.random() * relaxingImages.length)
   return relaxingImages[randomNumber]
}