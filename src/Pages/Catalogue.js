import React from 'react'
import '../CssFiles/Catalogue.css'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Card from '../CardComp/Card'
import Paginate from '../Pagination/Paginate'
import Pagination from '@mui/material/Pagination';
import ListItemButton from '@mui/material/ListItemButton';
import { Collapse, List, ListItemText, ListItemIcon } from '@mui/material'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import ArrowRightOutlined from '@mui/icons-material/ArrowRightOutlined'


function Catalogue() {

//   const initialValue = { title: "", price: "", description: "", category:"", image:"" }

//   const [formValue, setFormValue] = useState(initialValue);
  

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormValue({...formValue, [name] : value })
//   }

  const [data, setData] = useState([])

  const  [open, setOpen] = useState(true)


  const handleListClick = () => {
    setOpen(!open);
  }

  const handlePriceClick = () =>  {
    setOpen(!open);
  }

  useEffect(() => {
    getData();
  },[]);

  const getData = async () => {
    const {data} = await axios.get(
      "https://fakestoreapi.com/products"
    )
    setData(data)
  }

  const handleFilter = (value)  => {
    const DuplicateData = [...data]
    const filterData = DuplicateData.filter(c => c.category === value)
    setData(filterData)
    return;
  }

  const handlePriceLowFilter = (value) => {
    const DuplicateData = [...data]
    const FilterData = DuplicateData.filter((a) => a.price <= 50)
    setData(FilterData)
    return
  }

  const handlePriceModFilter = (value) => {
    const DuplicateData = [...data]
    const FilterData = DuplicateData.filter((a) => a.price >= 50  &&  a.price <=300)
    setData(FilterData)
    return
  }

  const handlePriceHighFilter = (value) => {
    const DuplicateData = [...data]
    const FilterData = DuplicateData.filter((a) => a.price >= 300)
    setData(FilterData)
    return
  }

  const[currentPage, setCurrentPage] = useState(1)
    const[postPerPage, setPostPerPage] = useState(6)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const IndexOfLastPost = currentPage*postPerPage
    const indexOfFirstPost = IndexOfLastPost-postPerPage
    let currentPost = data.slice(indexOfFirstPost, IndexOfLastPost)

  return (
    
    <div className="catalogue-cont" >
      <div className="sidebar-catcont">
        <div className="sidebar-innercont">
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                      component="nav"
                      aria-labelledby="nested-list-subheader">
              <ListItemButton onClick={handleListClick}>
                <ListItemText primary="Category" />
                {open ? <ExpandMore /> : <ExpandLess />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                          <ArrowRightOutlined />
                      </ListItemIcon>
                        <ListItemText primary="Electronics" onClick={()=>handleFilter("electronics")} />
                      </ListItemButton>
                     
                      <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                          <ArrowRightOutlined />
                      </ListItemIcon>
                        <ListItemText primary="Jewelery" onClick={()=>handleFilter("jewelery")} />
                      </ListItemButton>
                      
                      <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                          <ArrowRightOutlined />
                      </ListItemIcon>
                        <ListItemText primary="Mens" onClick={()=>handleFilter("men's clothing")} />
                      </ListItemButton>

                    
                      <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                          <ArrowRightOutlined />
                      </ListItemIcon>
                        <ListItemText primary="Womens" onClick={()=>handleFilter("women's clothing")} />
                      </ListItemButton>
                    </List>
                </Collapse>
                
            </List>
            <div>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                      component="nav"
                      aria-labelledby="nested-list-subheader">
              <ListItemButton onClick={handlePriceClick}>
                <ListItemText primary="Price" />
                {open ? <ExpandMore /> : <ExpandLess />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                          <ArrowRightOutlined />
                      </ListItemIcon>
                        <ListItemText primary="Cheap" onClick={()=>handlePriceLowFilter()} />
                      </ListItemButton>
                     
                      <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                          <ArrowRightOutlined />
                      </ListItemIcon>
                        <ListItemText primary="Moderate" onClick={()=>handlePriceModFilter()} />
                      </ListItemButton>
                      
                      <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                          <ArrowRightOutlined />
                      </ListItemIcon>
                        <ListItemText primary="Costly" onClick={()=>handlePriceHighFilter()} />
                      </ListItemButton>
                    </List>
                </Collapse>
                
            </List>
            </div>
        </div>  
        <div className="feedbar-innercont"  >
            <header>PRODUCTS</header>
        
            <div className="feedcatbarcont"  style={{display:"flex", flexWrap: "wrap", width:"100%",}}>
            {currentPost.map((d) => (
            <div key={d._id}  >
            <Card 
                image={d.image} 
                key={d._id}
                title={d.title}
                price={d.price}
                />
            </div>
        
        ))}
        </div>
        <div >
             <Paginate postPerPage={postPerPage} totalPost={data.length} paginate={paginate}/>
        </div>
        </div>
    </div>

</div>
    
  )
}

export default Catalogue