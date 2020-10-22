import React, {useState} from 'react';
import CreateListing from '../comps/CreateListing';
import CircleButton from '../comps/CircleButton';


export default {
    title: 'Example/Claudia Components',
    component: CreateListing
};

export const CreateAListing = () => <CreateListing />;
export const IconButton = () => <CircleButton />;