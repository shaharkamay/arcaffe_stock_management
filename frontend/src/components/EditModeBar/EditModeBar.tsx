import React from 'react';
import '../../assets/styles/header.css';
import styled from 'styled-components';
import TrashCanSvg from '../../assets/images/trash-can.svg';
import ArrowBackSvg from '../../assets/images/arrow-back.svg';
import EditSvg from '../../assets/images/edit.svg';
import { ItemI } from '../../@types';

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    background: var(--clr-primary);
    background-image: linear-gradient(to right,  
        var(--clr-primary),
        var(--clr-secondary) 130%);
    padding: 0.5em 0;
    font-family: var(--font-title);
    font-size: 1.5rem;
    color: var(--clr-light);
    .container {
        display: flex;
        justify-content: space-between;
    }
`;

const LeftSideBar = styled.div`
        display: flex;
        gap: 1rem;
`;

const RightSideBar = styled.div`
        display: flex;
        justify-content: flex-end;
        gap: 1rem;
`;

const EditIcon = styled.img`
        width: 2.2rem;
        height 2.2rem;
        background: none;
        border: 1px solid var(--clr-secondary);
        border-radius: 0.6rem;
        padding: 0.4rem;
        display: flex;
`;

const EditModeBar = ({selectedItems, setSelectedItems, removeSelectedItems}: {selectedItems: ItemI[], setSelectedItems: React.Dispatch<React.SetStateAction<ItemI[]>>, removeSelectedItems: () => void} ): JSX.Element => {
    
    const deselectAll = () => {
        setSelectedItems([]);
    };

    return (
        <Wrapper>
            <div className='container'>
            <LeftSideBar>
                <EditIcon src={ArrowBackSvg} onClick={deselectAll} />
            </LeftSideBar>
            <RightSideBar>
                {/* rendering the edit button only if a single item is selected */}
                {selectedItems.length === 1 ? <EditIcon src={EditSvg} /> : null}
                <EditIcon src={TrashCanSvg} onClick={removeSelectedItems}/>
            </RightSideBar>
            </div>
        </Wrapper>
    );
};

export default EditModeBar;