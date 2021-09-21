import React, { useEffect, useState } from 'react'
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap'



export const Curiosity = () => {

    const [photosCuriosity, setphotosCuriosity] = useState([])
    const [imgModal, setimgModal] = useState({})
    const [mostrarModal, setMostraModal] = useState(false);

    const pothosCuriosity = async () => {
        await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=wym97HNwu0SStTEQs97FQHY4FZ6JD8CGtdRl0NTv`)
            .then(res => res.json())
            .then(data => setphotosCuriosity(data.photos));
    }

    console.log(photosCuriosity.length);

    useEffect(() => {
        pothosCuriosity()
    }, [])

    const modal = (id) => {
        setMostraModal(!mostrarModal)
        setimgModal(
            id
        )
    }


    return (
        <div className="bg-dark">
            <h2 className="text-center text-white p-3"> <i>Rover Galery</i> </h2>
            <p className="text-center text-white p-3"> welcome to gallery from rover curiosity</p>
            <div className="row bg-dark">
                {photosCuriosity.map(p => (
                    <div className="col-md-3 p-2" key={p.id}>
                        <img className="img-thumbnail" src={p.img_src} alt="rover" />
                        <Button
                            className="btn btn-success m-2"
                            onClick={() => modal(p.img_src)}
                        >see picture</Button>
                    </div>
                ))}
            </div>

            <div className="col-md-12">
                <Modal className="text-center" isOpen={mostrarModal} >
                    <ModalBody >
                        <img className="col-md-12 col-xs-6 text-center img-thumbnail" src={imgModal} alt="" />
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={modal}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        </div>

    )
}
