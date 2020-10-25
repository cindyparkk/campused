import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Contain = styled.div`
    min-width: 216px;
    min-height: 236px;
    height: auto;
    background: #FFFFFF;
    border: 2px solid #000000;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    display: inline-flex;
`
const Content = styled.div`
    display: inline-flex;
    flex-direction: column;
    justify-content: space-around;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    
    div {
        cursor: pointer;
        padding: 30px 30px;
        &:hover {
            background-color: #FE9A4C;
            color: #FFF;
        }
        &:first-child:hover {
            border-radius: 10px 10px 0px 0px;
        }
        &:nth-child(3):hover{
            border-radius: 0px 0px 10px 10px;
        }
    }
`

const ExpandedMenu = () => {
    return <Contain>
        <Content>
            <div>Mark as Sold</div>
            <div>Edit</div>
            <div>Delete</div>
        </Content>
    </Contain>
}

ExpandedMenu.defaultProps = {

}

export default ExpandedMenu;