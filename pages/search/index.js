import React, {useState} from 'react';
import Search from '../../comps/Search';
import ProductDescription from '../../comps/ProductDescription';

import axios from 'axios';

export default function SearchPage() {

  const [post, setPost] = useState([]);

  const handleSearch = async (keyword) =>{
    var resp = await axios.post("https://us-central1-campused-15cf0.cloudfunctions.net/api/getPost"), {
      keyword: keyword
    };

  }

  return  <div className="page">
      <Search />
      <div className="search_results">
        <ProductDescription title="Recent Searches" description="No searches yet" />
      </div>
    </div>
}