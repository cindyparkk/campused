import React from 'react';
import CreateListing from '../comps/CreateListing';
import CircleButton from '../comps/CircleButton';
import Footer from '../comps/Footer';
import ProfilePost from '../comps/ProfilePost';
import Search from '../comps/Search';
import Header from '../comps/Header';
import HeaderMenu from '../comps/HeaderMenu';
import ProfileSlider from '../comps/ProfileSlider';


export default {
    title: 'Components/Claudia Components'
};

export const CreateAListing = () => <CreateListing />;
export const IconButton = () => <CircleButton />;
export const CampusedFooter = () => <Footer />;
export const AProfilePost = () => <ProfilePost />;
export const SearchBar = () => <Search />;
export const HeaderBar = () => <Header />;
export const HeaderMenuBar = () => <HeaderMenu />;
export const ProfileListingsAndWishlist = () => <ProfileSlider />