import React, {useState} from 'react';
import CreateListing from '../comps/CreateListing';
import CircleButton from '../comps/CircleButton';
import Footer from '../comps/Footer';
import ProfilePost from '../comps/ProfilePost';
import Search from '../comps/Search';


export default {
    title: 'Example/Claudia Components',
    component: CreateListing
};

export const CreateAListing = () => <CreateListing />;
export const IconButton = () => <CircleButton />;
export const CampusedFooter = () => <Footer />;
export const AProfilePost = () => <ProfilePost />;
export const SearchBar = () => <Search />;