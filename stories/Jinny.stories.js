import React from 'react';
import Divider from '../comps/Divider';
import Item from '../comps/Item';
import Price from '../comps/Price';
import UploadImage from '../comps/UploadImage';
import SendMoney from '../comps/SendMoney';
import Category from '../comps/Category';
import SmallCategory from '../comps/SmallCategory';
import Proceed from '../comps/Proceed';
import Paypal from '../comps/Paypal';
import Paypal_Button from '../comps/Paypal_Button';
import InputPaypal from '../comps/InputPaypal';
import Payment from '../comps/Payment';
import Browse_Button from '../comps/Browse_Button';







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
export const Small_Category = () => <SmallCategory />;
export const Proceed_Payment = () => <Proceed />;
export const Paypal_Payment = () => <Paypal />;
export const LoginPaypalButton = () => <Paypal_Button />;
export const Paypal_Input = () => <InputPaypal />;
export const Paypal_Input2 = () => <InputPaypal placeholder="password"/>;
export const LastPayment = () => <Payment />;
export const BrowseButton = () => <Browse_Button />;
