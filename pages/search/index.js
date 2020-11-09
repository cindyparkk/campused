import React, {useState} from 'react';
import Search from '../../comps/Search';
import ProductDescription from '../../comps/ProductDescription';

export default function SearchPage() {
  return  <div className="page">
      <Search />
      <div className="search_results">
        <ProductDescription title=""/>
      </div>
    </div>
}