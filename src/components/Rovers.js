import React from 'react'
import rover4 from '../img/rover4.jpg'

import {

    Link
} from "react-router-dom";


export const Rovers = () => {





    return (
        <div className="text-center bg-white">
            <h2 className="text-dark p-4">Curiosity</h2>
            <div className="row">
                <div className="text-center col-md-6">
                    <img src={rover4} className="img-thumbnail p-3" alt="" />

                </div>
                <div className="col-md-5 d-flex align-items-center">
                    <p className="text-dark">Mas de 800 pothos tomadas por el rover Curiosity.</p>
                    <Link className="btn btn-dark text-white m-3" to={`/curiosity`}>See Galery</Link>
                </div>
            </div>

        </div>
    )
}
