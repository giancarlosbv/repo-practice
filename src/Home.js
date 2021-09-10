import React, { useState, useEffect } from 'react'
import FormUncontrol from './ToDo'
const Home = () => {

    let [data, setData] = useState([])

    useEffect(() => {
        console.log('useEffect runs: API fetch')
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then(response => response.json())
            .then(result => setData(result))
    }, [])

    return ( 
        <>
            <h1>Home Page</h1>
            {data.map(item => <p key={item.id}>{ item.title }</p>)}
            <FormUncontrol/>

        </>
    );
}
 
export default Home;