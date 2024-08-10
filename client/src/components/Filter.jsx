import { Card, Chip, Typography, TextField, IconButton, Tooltip } from '@material-tailwind/react';
import React, { useState , useEffect } from 'react';
import { FaDeleteLeft } from "react-icons/fa6";
import deleteLeftIcon from '../assets/delete-left.svg'
import { getDataFromApi } from '../utility/api'

const Filter = ({setSelectedCategories,selectedCategories}) => {
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        getDataFromApi("/categories/all")
            .then((data) => {
                console.log("categories" ,data?.data);
                setCategories(data?.data);
            })
    }, []);


    
    const randomWidths = [16, 12, 10];
    const handleCategoryClick = (category) => {
        const isSelected = selectedCategories.some((selected) => selected._id === category._id);
        
        setSelectedCategories((prevSelected) => {
            if (isSelected) {
                return prevSelected.filter((selected) => selected._id !== category._id);
            } else {
                return [...prevSelected, category];
            }
        });
    };

    const [searchTerm, setSearchTerm] = useState(''); // State for search term

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase()); // Ensure case-insensitive search
    };

    const filteredCategories = categories.filter((category) =>
        category.title.toLowerCase().includes(searchTerm)
    );

    const handleRemoveSelectedCategory = (category) => {
        setSelectedCategories(prevSelected => {
            return prevSelected.filter(selected => selected._id != category._id)
        })
    }

    const handleClearAllSelectedCategory = () => {
        setSelectedCategories([]);
    }

    return (
        <Card className='w-[22vw] max-w-72 h-fit py-5 bg-[#350145] px-5'>
            <div className='flex flex-col mb-5'>
                <h1 className='font-bold text-2xl text-white mb-5'>Filter by categories</h1>
                <input
                    type='text sm'
                    className=' bg-white rounded p-1.5' // Add spacing for better layout
                    label='Search Categories'
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search Categories"
                />
                {selectedCategories.length > 0 && (
                    <div className='mt-4 flex flex-wrap gap-x-2 gap-y-3 w-full'>

                        {selectedCategories.map((selected) => (
                            <Chip
                                key={selected._id} // Add unique key for better performance with large lists
                                variant="filled"
                                color='pink'
                                value={`${selected.title}`}
                                className='capitalize text-sm font-light px-2 py-1 text-white rounded-md'
                                onClick={() => handleRemoveSelectedCategory(selected)}
                            />
                        ))}

                        <Tooltip
                            content="Clear All"
                            animate={{
                                mount: { scale: 1, y: 0 },
                                unmount: { scale: 0, y: 25 },
                              }}
                        >
                            <img src={deleteLeftIcon} className='h-6 my-auto' onClick={handleClearAllSelectedCategory}/>
                        </Tooltip>
                    </div>
                )}
            </div>

            {selectedCategories.length > 0 && <hr />}
            {categories.length == 0 && (
                <div className='flex flex-wrap gap-x-2 mt-5 gap-y-3 w-full bg-white text-white  animate-pulse'>
                    {[...Array(40)].map((val, key) => (<Chip
                        key={key} // Add unique key for better performance with large lists
                        variant='chip filled'
                        value=""
                        className={`capitalize w-${randomWidths[Math.floor(Math.random() * randomWidths.length)]} h-7 text-sm font-light px-2 py-1 rounded-md bg-white`}
                    />))}
                </div>
            )}
            <div className='flex flex-wrap gap-x-2 mt-5 gap-y-3 w-full'>
                {filteredCategories.map((category) => (
                    <Chip
                        key={category._id} // Add unique key for better performance with large lists
                        variant={selectedCategories.some((selected) => selected._id === category._id) ? 'chip filled' : 'outlined'}
                        value={category.title}
                         color='pink'
                        className='capitalize text-sm font-light px-2 py-1 rounded-md text-white'
                        onClick={() => handleCategoryClick(category)}
                    />
                ))}
            </div>


        </Card>
    );
};

export default Filter;
