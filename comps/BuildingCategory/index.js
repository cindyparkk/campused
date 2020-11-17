import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import SmallCategory from '../SmallCategory';

const BuildingCategory =({expand})=> {

    const [expanded, setExpanded] = useState(false);
    const [bed, setBed] = useState(false);

    function onCategorySelect(str){
        if(str === "bed"){
            setBed(true);
        }
    }

    useEffect(() => {
        setExpanded(expand);
    },[expand])

return <div>
    <SmallCategory title="Select the Building" name1="Brock Hall" name2="Walter Gage" name3="Ponderosa" name4="Thunderbird"/>
    </div>

}
    
BuildingCategory.defaultProps = {
expand:false
}

export default BuildingCategory;
