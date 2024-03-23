import React, { useState, useEffect } from 'react';
import AdoptCard from "../../Components/adoptcard/adoptcard";
import axios from 'axios';

function Adopt() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
            const response = await axios.get('http://localhost:4305/api/pet');
            setData(response.data);
            } catch (error) {
            setError(error);
            } finally {
            setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return(
        <>
            <div className="h-screen w-full px-8 lg:px-20 flex flex-col pt-20 lg:pt-24 gap-10 lg:gap-20">
            {data.map((pet) => (
                <AdoptCard key={pet.id} name={pet.name} description={pet.description} />
            ))}
            </div>
        </>
    )
}

export default Adopt