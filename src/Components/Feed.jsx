import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {client} from '../client';
import { feedQuery, searchQuery } from '../Utils/data';
import MasonryLayout from './MasonryLayout';
import Spinner from './Spinner';


const Feed = () => {

  // all hooks
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();
  const [pins, setPins] = useState(null);

  useEffect(() => { 
    if (categoryId) {

      setLoading(true);
      
      const query = searchQuery(categoryId);

      client.fetch(query)
        .then((data) => {
          setPins(data);
          setLoading(false);
        });
    } else { 
      setLoading(true);

      client.fetch(feedQuery)
        .then((data) => {
          setPins(data);
          
          setLoading(false);
        })
    }
  }, [categoryId]);

  if(loading) return <Spinner message="we are adding new ideas to your feed!" />

  return (
    <div className=''>
      { pins && <MasonryLayout pins={pins} /> }
    </div>
  )
}

export default Feed