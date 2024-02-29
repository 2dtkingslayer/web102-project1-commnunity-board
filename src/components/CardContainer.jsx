import React, { useEffect, useState } from 'react';
import Card from './Card';

const CardContainer = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => { // Fetch CSV file
        fetch('../src/database.csv')
        .then(response => response.text())
        .then(data => {
            const rows = data.split('\n');
            const restaurantsData = rows.map((row) => {
                const [title, location, category, image, star, link] = row.split(', ');
                return { title, location, category, image, star, link };
            });
            setRestaurants(restaurantsData);
        })
        .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="card-container">
            {restaurants.map((restaurant, index) => (
                <Card
                    key={index}
                    title={restaurant.title}
                    location={restaurant.location}
                    category={restaurant.category}
                    image={restaurant.image}
                    stars={restaurant.star}
                    link={restaurant.link}
                />
            ))}
        </div>
    );
};

export default CardContainer;
