import React, { useEffect, useState } from 'react';
import './CategoryList.css';
import { Link } from 'react-router-dom';
import deleteicon from '../../assets/delete.png';
import axios from 'axios';

const CategoryList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await fetch('http://localhost:3000/category-list', { method: 'GET' });
            const result = await response.json();
            console.log(result, "CustomerData");
            setData(result.data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const deleteCategory = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:3000/categories/${id}`);
            console.log(response.data.message);
            // Reload the page to update the list
            window.location.reload();
        } catch (error) {
            console.error('There was an error deleting the category!', error);
        }
    };

    return (
        <div className='category-list'>
            <div className="category-list-title heading">
                <p>Name</p>
                <p>Items</p>
                <p>Created Date</p>
                <p></p>
            </div>
            <hr />
            {data.map((e) => {
                const date = new Date(e.joinedAt);
                const options = { year: 'numeric', month: 'long', day: 'numeric' };
                let formattedDate = date.toLocaleDateString('en-US', options);
                return (
                    <div key={e._id} className="category-format cat">
                        <Link className="name">
                            <img src={e.category.image} width={40} alt="" />
                            <p>{e.category.name}</p>
                        </Link>
                        <div className="email">
                            <p>0</p>
                        </div>
                        <div className="registered">
                            <p>{formattedDate}</p>
                        </div>
                        <div className="fullname">
                            <img
                                src={deleteicon}
                                width={20}
                                alt="delete"
                                onClick={() => deleteCategory(e._id)}
                                style={{ cursor: 'pointer' }}
                            />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CategoryList;
