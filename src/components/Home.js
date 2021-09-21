import React, { useEffect, useState } from 'react'
import { Rovers } from './Rovers'

export const Home = () => {

    const [imagendelDia, setimagendelDia] = useState("")

    const consultarNasa = async () => {
        await fetch('https://api.nasa.gov/planetary/apod?api_key=wym97HNwu0SStTEQs97FQHY4FZ6JD8CGtdRl0NTv')
            .then(res => res.json())
            .then(data => setimagendelDia(data))
    }

    useEffect(() => {
        consultarNasa()
    }, [])

    return (
        <>
            <div className="container-fluid  text-center bg-dark">
                <h2 className="text-light p-4">IMAGE OF DAY</h2>
                <div className="row">

                    <div className="col-md-12 col-lg-7">
                        <img className="img-fluid" src={imagendelDia.url} alt="" />
                    </div>

                    <div className="col-md-12 col-lg-4 text-center justify-content-center">
                        <h3 className="text-light m-3"><i>{imagendelDia.title}</i></h3><hr className="text-light" />
                        <p className="text-light">{imagendelDia.explanation}</p>
                        <p className="text-light">Copyright: <small>{imagendelDia.copyright}</small></p>
                        <h4 className="text-light"> {imagendelDia.date}</h4>
                    </div>
                </div>
            </div>

            <Rovers />
        </>
    )
}
