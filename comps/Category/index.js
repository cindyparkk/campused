import React, {useState, useEffect} from 'react';
import styled from 'styled-components';





const Container = styled.div`
min-width: 511px;

font-weight:bold;
font-size:28px;
display:inline-flex;
flex-direction:column;
font-family: 'Montserrat', sans-serif;

`;

const DropDownBox = styled.div`


    width:100%;
    padding:10px;
    display:flex;
    
    img {
        color: #000000;
        margin: 0px 10px;
        width:15%;
        heigh:auto;
}
`;

const DropDownMenu = styled.div`

display:inline-flex;
border: 2px solid #000000;
border-radius: 16px;
padding:5px 10px;

`;


const Expand = styled.div`
margin-top:5px;
background: #FFFFFF;
border: 2px solid #000000;
box-sizing: border-box;
border-radius: 16px;

box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    width:100%;
    padding:10px;
    height: 100%;


    display:${props=>props.expanded ? "inline-flex" : "hidden"};
    max-height:${props=>props.expanded ? "auto" : "0px"};
    font-size:${props=>props.expanded ? "28px" : "0px"};
    opacity:${props=>props.expanded ? 1 : 0};

    transition:opacity 0.5s;
    flex-direction: column;

    div{
        &:hover{
            background-color:#FE9A4C;
        }
        
        padding:10px;
        margin:10px;
        // margin:${props=>props.expanded ? "10px" : "0px"};
        cursor:pointer;
       
       
    
    }
 
 

`;


const Category =({expand,onCategorySelect})=> {


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
            <div>Choose a Category</div>
            <div><img src="./arrowndown.png"/ ></div>
            </DropDownBox>
        </DropDownMenu>

        <Expand expanded={expanded}>

            <div onClick={()=> {
                onCategorySelect("bed");
            }}>
                Bedroom</div>

             <div onClick={()=> {
                onCategorySelect("kit");
            }}>
                Kitchen</div>
             <div onClick={()=> {
                onCategorySelect("bath");
            }}>
                Bathroom</div>
            <div onClick={()=> {
                onCategorySelect("liv");
            }}>
                Living room & General Furniture</div>

        </Expand>
    </Container>

    </div>

}


Category.defaultProps = {

expand:false
}


export default Category;