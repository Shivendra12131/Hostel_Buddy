import { Card, Chip, Typography, TextField, Input, IconButton, Tooltip } from '@material-tailwind/react';
import React, { useState } from 'react';
import { FaDeleteLeft } from "react-icons/fa6";
import deleteLeftIcon from '../assets/delete-left.svg'

const Filter = () => {
    const [categories, setCategories] = useState([
        { _id: '1', title: 'Snacks' },
        { _id: '2', title: 'Keyboard' },
        { _id: '3', title: 'Mouse' },
        { _id: '4', title: 'Monitor' },
        { _id: '5', title: 'Jeans' },
        { _id: '6', title: 'Trouser' },
        { _id: '7', title: 'Laptop' },
        { _id: '8', title: 'Snacks' },
        { _id: '9', title: 'Electronics' },
        { _id: '10', title: 'Fashion' },
        { _id: '11', title: 'Home & Kitchen' },
        { _id: '12', title: 'Beauty & Personal Care' },
        { _id: '13', title: 'Books & Movies' },
        { _id: '14', title: 'Toys & Games' },
        { _id: '15', title: 'Sports & Outdoors' },
        { _id: '16', title: 'Grocery & Gourmet Food' },
        { _id: '17', title: 'Health & Household' },
        { _id: '18', title: 'Pet Supplies' },
        { _id: '19', title: 'Automotive' },
        { _id: '20', title: 'Baby' },
        { _id: '21', title: 'Industrial & Scientific' },
        { _id: '22', title: 'Office Products' },
        { _id: '23', title: 'Software' },
        { _id: '24', title: 'Tools & Home Improvement' },
        { _id: '25', title: 'Musical Instruments' },
        { _id: '26', title: 'Arts, Crafts & Sewing' },
        { _id: '27', title: 'Cell Phones & Accessories' },
        { _id: '28', title: 'Computers' },
        { _id: '29', title: 'Video Games' },
        { _id: '30', title: 'Furniture' }
    ]);


    const [selectedCategories, setSelectedCategories] = useState([]);
    const randomWidths = [16, 12, 10];
    const handleCategoryClick = (category) => {
        console.log(category)
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
                <Input
                    type='text'
                    className=' bg-white' // Add spacing for better layout
                    label='Search Categories'
                    value={searchTerm}
                    onChange={handleSearchChange}
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
