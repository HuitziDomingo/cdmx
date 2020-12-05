import React, { useState, useEffect } from 'react'
const Graphic = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="container">
                <ul className="list-group">
                    {
                        items.map(item => (
                            <li className="list-group-item" key={item.id} >
                                {item.id}. {item.title}
                            </li>
                        ))
                    }
                </ul>
            </div>

        );
    }
}

export default Graphic