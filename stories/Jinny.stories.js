import React from 'react';
import Divider from '../comps/Divider';
import Item from '../comps/Item';
import Price from '../comps/Price';
import UploadImage from '../comps/UploadImage';
import SendMoney from '../comps/SendMoney';
import Category from '../comps/Category';





export default {
    title: 'Example/Jinny Components',
    component: Hr_Divider
};




export const Hr_Divider= () => <Divider />;
export const ItemList = () => <Item />;
export const PriceInput = () => <Price />;
export const Upload = () => <UploadImage />;
export const Send = () => <SendMoney />;
export const BigCategory = () => <Category />;
