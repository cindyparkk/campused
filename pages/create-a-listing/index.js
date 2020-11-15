import React, {useState} from 'react';
import Header from '../../comps/Header';
import HeaderMenu from '../../comps/HeaderMenu';
import Footer from '../../comps/Footer';
import CreateListing from '../../comps/CreateListing';
import InputPost from '../../comps/InputPost';

import axios from 'axios';

export default function CreateAListing() {

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [building, setBuilding] = useState("");
  const [desc, setDesc] = useState("");
  const [dormnum, setDormnum] = useState("");
  const [furniture, setFurniture] = useState(false);
  const [leavein, setLeavein] = useState(false);

  const createPost = async (e)=>{
  
      console.log("clicked", e, price, title, building, desc, dormnum, furniture);
  
     try{
       console.log("");
        var resp = await axios.post("https://us-central1-campused-15cf0.cloudfunctions.net/api/createPost", {
        title: title,
        price: price,
        building: building,
        desc: desc,
        dormnum: dormnum,
        furniture: furniture,
        leavein: leavein
      });
      console.log(resp.data);
      Router.push("/post-sucess");
      
     } catch {
       console.log("Failed");
      //  show error if not everything is filled out
     }

    }
  
  return  <div className="page">
      <Header />
      <HeaderMenu />
      <div className="page_contents">
        <CreateListing />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
}