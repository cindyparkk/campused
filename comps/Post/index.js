import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Item from '../Item';
import CircleButton from '../CircleButton';

const Contain = styled.div`
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    background-color: #FFF7D9;
    border: 2px solid black;
    border-radius: 12px;
    box-sizing: border-box;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    // padding: 30px;
    padding-top:50px;
`

const Content = styled.div`
    min-width: 511px;
    min-height: 1190px; 
    // flex: 3;    
    
    justify-content: center;
    align-items: center;
    // flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;     
    // margin: 25px;

    padding-left:10%;
`

const Title = styled.h3`
    margin-top: -10px;
`

const Div = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
`

const PageNum = styled.p`
    // position: absolute;
    // bottom: 40px;
    margin: 0 40px;
`

const Item_list = styled.div`
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 4%;
    grid-column-gap:2%;
`;

const Post = ({pageTitle, n, x, imgurl, price, title}) => {
    return <Contain>
        <Content>
            <Title>{pageTitle}</Title>
            <Item_list>
            <Item imgurl={imgurl} title={title} price={price}></Item>
            {/* <Item imgurl={imgurl} title={title} price={price}></Item>
            <Item imgurl={imgurl} title={title} price={price}></Item>
            <Item imgurl={imgurl} title={title} price={price}></Item>
            <Item imgurl={imgurl} title={title} price={price}></Item> */}
            </Item_list>
           
        </Content>
        <Div>
            <CircleButton icon="/arrowleft.svg"/>
            <PageNum>Page {n} of {x}</PageNum>
            <CircleButton />
        </Div>
    </Contain>
}

Post.defaultProps = {
    pageTitle: "Recent Posts",
    n: 1,
    x: 3,
    imgurl: null,
    title: null,
    price: null
}

export default Post;