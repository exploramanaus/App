import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { TiThMenu } from "react-icons/ti";

import './offcanvas-main.css'

function MenuMain() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <TiThMenu className="button" variant="primary" onClick={handleShow} size={30} />

            <Offcanvas show={show} onHide={handleClose} placement='end' className="offcanvas-show">
                <Offcanvas.Header closeButton className='close-button'>
                    <Offcanvas.Title>
                        <img src={require('../img/profile-icon.png')} alt="Foto de perfil" className="profile-main" />
                        <div className='username'>
                            Nome
                        </div>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul>
                        <Button className='button-menu'>Perfil</Button>
                        <Button className='button-menu'>Configurações</Button>
                        <Button className='button-menu'>Log in</Button>
                        <Button className='button-menu'>Log out</Button>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default MenuMain;