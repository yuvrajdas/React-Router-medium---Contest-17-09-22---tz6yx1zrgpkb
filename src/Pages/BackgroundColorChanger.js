import React from 'react';
import {useParams} from 'react-router';

export const BackgroundColorChanger = () =>{
    let param = useParams();
    return(
       <main style={{ height:"100vh", backgroundColor:params.colorname }} >
        Background Color Changer
        </main>
    )
}
