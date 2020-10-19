import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);

    // //Esto reemplaza al componentdidmount, el segundo parametro son las dependencias
    // useEffect(() => {
    //     getGifs(category)
    //         .then( setImages);
    // }, [category])
    const {data:images, loading} = useFetchGifs(category);
    

    return (
        <>

            <h3 className='animate__animated animate__fadeIn'>{category}</h3>

            {loading && <p className='animate__animated animate__flash'>Loading</p>}
            <div className='card-grid'>

                {
                    images.map((img) => (
                        <GifGridItem
                            key={img.id}
                            {...img} />
                    ))
                }


            </div>
        </>
    )
}
