import React from 'react';
import Post from '../comps/Post';
import Button from '../comps/Button';
import FilterOpen from '../comps/FilterOpen';
import InputSignup from '../comps/InputSignup';
import InputwIcon from '../comps/InputwIcon';
import InputPost from '../comps/InputPost';
import ExpandedMenu from '../comps/ExpandedMenu';

export default {
    title: 'Cindy Components',
    component: Post
};

export const RecentPosts = () => <Post />;
export const DefaultButton = () => <Button />;
export const FilterOpened = () => <FilterOpen />;
export const InputForSignup = () => <InputSignup />;
export const InputwithIcon = () => <InputwIcon />;
export const InputForPosts = () => <InputPost />;
export const MenuExpanded = () => <ExpandedMenu />;