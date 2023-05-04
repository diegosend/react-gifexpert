import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGif';



export const useFetchGifs = (category) => {


     const [images, setImages] = useState([]);
     const [isLoadind, SetIsLoading] = useState(true);
     
     const getImages = async() =>{
       const newImages = await getGifs( category);
       setImages(newImages);
       SetIsLoading(false)

     }

     useEffect(() => {
       getImages();
     },[])

    return {

        images,
        isLoadind:true
    }

  
}
