import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Contain = styled.div`
    min-width: 367px;
    min-height: 617px;
    display: inline-flex;
    flex-direction: column;
    border-radius: 17px;
    background: #FFFFFF;
    box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 17px;
`

const Content = styled.div`
    margin: 25px;
`

const Checkbox = styled.div`
`

const FilterOpen = () => {
    return <Contain>
        <Content>
            <div>Filters</div>
            <div>
                <div>Price</div>
                <div>
                    <div>$0 - $29</div>
                    <Checkbox></Checkbox>
                </div>
            </div>
        </Content>
    </Contain>
}

export default FilterOpen;