import React from 'react';
import ChefContainer from '../ChefContainer/ChefContainer';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    const data = useLoaderData()
    return (<>
    <div className='bg-orange-50'>
            <div className='container mx-auto grid sm:grid-cols-1 lg:grid-cols-3'>
                <div>
                    <img className='sm:w-full lg:w-1/2 lg:h-1/2 mt-14 rounded-md' src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
                <div className='my-4'>
                    <h1 className='text-6xl text-center'>Every Flavour tells a Story</h1>
                    <img className='mt-8 rounded-md' src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
                <div className='relative'>
                    <img className='sm:w-full lg:w-1/2 lg:h-1/2 mb-14 lg:absolute right-0 bottom-0 rounded-md' src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
            </div>
        </div>
        <ChefContainer data={data}></ChefContainer>
    </>
        
    );
};

export default Home;