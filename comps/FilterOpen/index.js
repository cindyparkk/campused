import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import close from '../../public/close.png';

const Contain = styled.div`
    min-width: 367px;
    min-height: 617px;
    display: inline-flex;
    border-radius: 17px;
    background: #FFFFFF;
    box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 17px;
`

const Content = styled.div`
    margin: 25px;
`

const Top = styled.div`
    display: inline-flex;
    width: 100%;
    justify-content: space-between;
`

const Title = styled.h1`
`

const Subtitle = styled.h2`
`
const Box = styled.div`
    display: inline-flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 25px;
`

const Checkbox = styled.input`
    width: 25px;
    height: 25px;
    border: 10px solid #9A9A9A;
    border-radius: 3px;

    &:after{
        content: " ";
        display: inline-block;
        visibility: visible;
        background-color: #EA7317;
    }
`

const Icon = styled.img`
    width: 22px;
    height: 22px;
    cursor: pointer;
    margin: 10px;
`;

// const Input = styled.input`
//     opacity: 0;
//     cursor: pointer;
//     height: 0;
//     width: 0;

//     &:checked ~ Checkbox {
//         background-color: #EA7317;
//     }
// `

// const Checkbox = styled.span`
//     width: 25px;
//     height: 25px;
//     border: 2px solid #9A9A9A;
//     border-radius: 3px;

//     &:after {
//         left: 9px;
//         top: 5px;
//         width: 5px;
//         height: 10px;
//         border: solid white;
//         border-width: 0 3px 3px 0;
//         -webkit-transform: rotate(45deg);
//         -ms-transform: rotate(45deg);
//         transform: rotate(45deg);
//     }
// `

const FilterOpen = () => {
    return <Contain>
        <Content>
            <Top>
                <Title>Filters</Title>
                <Icon src={close}></Icon>
            </Top>
            <div>
                <Subtitle>Price</Subtitle>
                <Box>
                    <div>$0 - $29</div>
                    {/* <Input type="checkmark"></Input> */}
                    <Checkbox type="checkbox"></Checkbox>
                </Box>
                <Box>
                    <div>$30 - $59</div>
                    {/* <Input type="checkmark"></Input> */}
                    <Checkbox type="checkbox"></Checkbox>
                </Box>
                <Box>
                    <div>$60 - $100</div>
                    {/* <Input type="checkmark"></Input> */}
                    <Checkbox type="checkbox"></Checkbox>
                </Box>
            </div>
            <div>
                <Subtitle>Furniture Age</Subtitle>
                <Box>
                    <div>0 - 6 months</div>
                    {/* <Input type="checkmark"></Input> */}
                    <Checkbox type="checkbox"></Checkbox>
                </Box>
                <Box>
                    <div>7 - 12 months</div>
                    {/* <Input type="checkmark"></Input> */}
                    <Checkbox type="checkbox"></Checkbox>
                </Box>
                <Box>
                    <div>2+ years</div>
                    {/* <Input type="checkmark"></Input> */}
                    <Checkbox type="checkbox"></Checkbox>
                </Box>
            </div>
        </Content>
    </Contain>
}

export default FilterOpen;