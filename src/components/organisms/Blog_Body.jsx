import React from 'react';
import {
    B_banner,
    B_cards,
    ODC_knowMore,
    B_longCard,
    R_card,
    ODC_getInTouch
} from '../molecules';

const Blog_Body = () => {
    return (
        <>
            <B_banner/>
            <B_cards/>
            <ODC_knowMore bg="#FF5670" color="#FF8D9E"/>
            <B_cards/>
            <B_longCard/>
            <R_card/>
            <ODC_getInTouch />
        </>
    )
}

export default Blog_Body;
