import React, { useState } from 'react'
import uniqueId from 'uniqueid'
import ProgressBar from './ProgressBar'

const Language = () => {

    const [data, setData] = useState([
        {
            id: uniqueId,
            value: 'MongoDB',
            xp: 1.3
        },
        {
            id: uniqueId,
            value: 'ExpressJs',
            xp: 1.1
        },
        {
            id: uniqueId,
            value: 'ReactJs',
            xp: 2
        },
        {
            id: uniqueId,
            value: 'NodeJs',
            xp: 1.7
        }
    ])


    return (
        <div className='langage'>
            <div className="years d-flex mb-3 justify-content-between">
                <div>Annee d'experience</div>
                <div>1 an</div>
                <div>2 ans</div>
            </div>

            {
                data.map((item) => {
                    return (
                        
                            <ProgressBar 
                                hey={item.id}
                                item={item}
                                calssName="displayLanguage"
                            />
                        
                    )
                })
            }

            <p className="name text-center mt-5">
                ---------------------- Jean elossy ---------------------------
            </p>
        </div>
    )
}

export default Language;
