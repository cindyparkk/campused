import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import CircleButton from '../../comps/CircleButton';
import DropDown from '../../comps/DropDown';


const Contain = styled.div`
    max-width: 367px;
    // min-height: 617px;
    border-radius: 17px;
    background: #FFFFFF;
    box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 17px;
    transform-origin: bottom;
    overflow: hidden;
    max-height: ${props=>props.showfilters ? "617px" : "0px"};
    transition: 0.5s ease-in-out;
    z-index: 4;
   
`
const Main = styled.div`
    height: 700px;
    display: inline-flex;
    justify-content: flex-end;
    flex-direction: column;
    position: relative;
`;

const Cont = styled.div`

`;

const Content = styled.div`
    margin: 25px;
`

const Top = styled.div`
    display: inline-flex;
    width: 100%;
    justify-content: space-between;
`

const Title = styled.h1`
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 35px;
`

const Subtitle = styled.h3`
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 24px;
`
const Box = styled.div`
    display: inline-flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 25px;

    & > * {
        font-family: "Assistant", sans-serif;
        font-weight: 300;
        font-size: 18px;
    }
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

const FilterContainer = styled.div`
    transition: 0.3s;
    opacity: ${props=>props.filterbutton ? "0" : "1"};
    width: 50px;
`;

const GrayBackground = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgb(100, 100, 100, 0.4);
    z-index: 1;
    visibility: ${props=>props.hide ? "visible" : "hidden"};
    position: fixed;
    top: 0;
    left: 0;
    transition: 0.5s;
    opacity: ${props=>props.gray ? "1" : "0"};
`;

const DropDownContainer = styled.div`
    // border: 1px solid black;
    background: #FFF;
    
`;

const Desktop = styled.div`

`;

const ContainDesktop = styled.div`
    max-width: 367px;
    // min-height: 617px;
    border-radius: 17px;
    background: #FFFFFF;
    box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 17px;
    transform-origin: top;
    overflow: hidden;
    max-height: ${props=>props.showfilters ? "617px" : "0px"};
    transition: 0.5s ease-in-out;
    z-index: 4;
`;

const Mobile = styled.div`

`;

const FilterOpen = () => {
    const [showfilters, setFilter] = useState(false);
    const [gray, showGray] = useState(false);
    const [filterbutton, setButton] = useState(false);
    const [hide, setHide] = useState(false);



    return <Cont>

    {/* DESKTOP */}

    {process.browser && window.innerWidth > 940 ? <Desktop>
        <DropDownContainer showfilters={showfilters} onClick={()=>{
            setFilter(!showfilters);
        }}>
            <DropDown title='Filters' />
        </DropDownContainer>


        <ContainDesktop showfilters={showfilters}>
        <Content>
            <Top>
                <Title>Filters</Title>
                <Icon src='/close2.png' showfilters={showfilters} onClick={()=>{
                setFilter(!showfilters);
            }}></Icon>
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
        
    </ContainDesktop>

    </Desktop> : null}


{/* MOBILE */}

{process.browser && window.innerWidth < 940 ?<Mobile>

    <Main>

    
        <FilterContainer showfilters={showfilters} hide={hide} gray={gray} filterbutton={filterbutton} onClick={()=>{
                setFilter(!showfilters);
                showGray(!gray);
                setButton(true);
                setHide(true);
                if(showfilters === true){
                    setTimeout(function(){
        
                            setButton(false);
                
                    }, 600);
                }
                
            }}>
                <CircleButton icon='/filter.png' iconwidth='32px' iconheight='32px' gray={gray} hide={hide} filterbutton={filterbutton} showfilters={showfilters} onClick={()=>{
                    setFilter(!showfilters);
                    showGray(!gray);
                    setButton(true);
                    setHide(true);
                    if(showfilters === true){
                        setTimeout(function(){
                                setButton(false);
                        }, 600);
                    }
                    
                }}/>
        
        </FilterContainer>

        <GrayBackground gray={gray} hide={hide} onClick={()=>{
                setFilter(!showfilters);
                showGray(!gray);
                setButton(true);
                setHide(false);
                if(showfilters === true){
                    setTimeout(function(){
        
                            setButton(false);
                
                    }, 600);
            }
            
        }}></GrayBackground>


            <Contain showfilters={showfilters}>
        <Content>
            <Top>
                <Title>Filters</Title>
                <Icon src='/close2.png' showfilters={showfilters} filterbutton={filterbutton} gray={gray} onClick={()=>{
                setFilter(!showfilters);
                showGray(!gray);
                setButton(true);
                setHide(false);
                if(showfilters === true){
                    setTimeout(function(){
        
                            setButton(false);
                    }, 600);
                }
                
                
            }}></Icon>
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
    
    </Main>
    </Mobile> : null}
    </Cont> 
}

export default FilterOpen;