import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
//import PropTypes from 'prop-types'

const GifExpertApp = props => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball']
    const [categories, setCategories] = useState(['One Punch'])

    // const handleAdd = () =>{

    //     setCategories([...categories, 'El Chavo']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />

            <AddCategory 
                setCategories={setCategories}
            />

            <ol>
                {
                    categories.map(c => (
                        <GifGrid
                            key={c} 
                            category={c} 
                            />                        
                    ))
                }
            </ol>
        </>
    )
}

// GifExpertApp.propTypes = {

// }

export default GifExpertApp
