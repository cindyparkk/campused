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
    padding: 30px;
`

const Content = styled.div`
    min-width: 511px;
    min-height: 1190px;
    flex: 3;    
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;     
    // margin: 25px;
`

const Title = styled.h4`
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

const Post = ({title, n, x}) => {
    return <Contain>
        <Content>
            <Title>{title}</Title>
            <Item></Item>
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