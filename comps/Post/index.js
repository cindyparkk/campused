import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Item from '../Item';

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
`

const PageNum = styled.p`
    // position: absolute;
    // bottom: 40px;
`

const Item_list = styled.div`

    display:grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 4%;
    grid-column-gap:2%;
`;

const Post = ({title, n, x}) => {
    return <Contain>
        <Content>
            <Title>{title}</Title>
            <Item_list>
            <Item></Item>
            <Item imgurl='/ubcdorm.png' text1='1 Bed 1Bath UBC Dorm' text2='$99'></Item>
            <Item imgurl='/userpost2.png' text1='Plant pot' text2='$10'></Item>
            <Item imgurl='/userpost3.png' text1='Round white table' text2='$100'></Item>
            <Item imgurl='/userpost4.png' text1='2 Matteresses' text2='$99'></Item>
            <Item imgurl='/userpost5.png' text1='Desk with selves' text2='$90'></Item>
            </Item_list>
           
        </Content>
        <Div>
            <PageNum>Page {n} of {x}</PageNum>
        </Div>
    </Contain>
}

Post.defaultProps = {
    title: "Recent Posts",
    n: 1,
    x: 3
}

export default Post;