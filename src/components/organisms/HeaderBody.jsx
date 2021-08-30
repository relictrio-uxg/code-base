import React, { useState } from 'react';
import { Header , SideBar } from '../molecules';


const HeaderBody = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <Header toggle={toggle}/>
        </>
    )
}

export default HeaderBody;
