import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Container = styled.div`
min-width: 252px;


display:inline-flex;
flex-direction:column;

padding:0px;


`;

const DropDownMenu = styled.div`

display:inline-flex;
border: 1px solid #000000;
border-radius: 12px;
padding:5px 10px;

`;


const DropDownBox = styled.div`


    // width:100%;
    padding:10px;
    display:flex;

    font-weight:200;
    color:#999999;
    
    
`;


const Expand = styled.div`
min-width: 252px;
margin-top:5px;
background: #FFFFFF;
border: 2px solid #000000;
box-sizing: border-box;
border-radius: 16px;

box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    // width:100%;
    // padding:10px;
    height: 100%;


    display:${props=>props.expanded ? "inline-flex" : "hidden"};
    max-height:${props=>props.expanded ? "auto" : "0px"};
    font-size:${props=>props.expanded ? "24px" : "0px"};
    opacity:${props=>props.expanded ? 1 : 0};

    transition:opacity 0.3s;
    flex-direction: column;

    div{
        &:hover{
            background-color:#FE9A4C;
        }
        
        &:first-child:hover {
            border-radius: 14px 14px 0px 0px;
        }
        &:nth-child(4):hover{
            border-radius: 0px 0px 14px 14px;
        }

        padding:20px;

        // margin:10px;
        // margin:${props=>props.expanded ? "10px" : "0px"};
        cursor:pointer;
       
       
    
    }
`;

const Arrow = styled.img`
    width: 100%;
    height: 100%;
`;

const ArrowDiv = styled.div`
    mid-width: 10px;
    height: auto;
    padding-left:55px;

`;



const SmallCategory =({expand,onCategorySelect,name1,name2,name3,name4})=> {


    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        setExpanded(expand);
    },[expand])

return <div>
<Container>
    <DropDownMenu onClick={() => { 
        setExpanded(!expanded);
    }}>
        <DropDownBox>
        <div>Select a Category</div>

        <ArrowDiv>
            <Arrow src="/arrowdown.png" />
        </ArrowDiv>


        </DropDownBox>
    </DropDownMenu>

    <Expand expanded={expanded}>

        <div onClick={()=> {
            onCategorySelect("bed");}}>
           {name1}</div>
         <div onClick={()=> {
            onCategorySelect("kit");}}>
            {name2}</div>
         <div onClick={()=> {
            onCategorySelect("bath");}}>
            {name3}</div>
        <div onClick={()=> {
            onCategorySelect("liv");}}>
           {name4}</div>
    </Expand>
    </Container>
    </div>

}
    
SmallCategory.defaultProps = {

expand:false,
name1:"Bedroom",
name2:"Kitchen",
name3:"Bathroom",
name4:"Living room & \n General Furniture"

}


    export default SmallCategory;