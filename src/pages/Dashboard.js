import React, { useEffect, useState } from 'react'
import Header from '../components/common/Header';
import TabsComponent from '../components/dashboard/TabsComponent';
import axios from 'axios';
import Search from '../components/dashboard/Search';
import PaginationComponent from '../components/dashboard/PaginationComponent';
import Loader from '../components/common/Loader';
import BackToTop from '../components/common/BackToTop';
import { get100Coins } from '../functions/get100Coins';
import Footer from '../components/common/Footer';



function DashboardPage() {

  const [coins, setCoins] = useState([]);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const handlePageChange = (event, value) => {
    setPage(value);
    var previousIndex = (value - 1) * 10;
    setPaginatedCoins(coins.slice(previousIndex, previousIndex + 10));

  };
const onSearchChange = (e)=>{
  setSearch(e.target.value);
}

var filterdCoins = coins.filter((item)=>
item.name.toLowerCase().includes(search.toLowerCase()) || 
item.symbol.toLowerCase().includes(search.toLowerCase())
);
  useEffect(()=>{
    getData();
  },[]);

const getData = async () => {
  
const myCoins = await get100Coins();
if(myCoins){
  setCoins(myCoins);
  setPaginatedCoins(myCoins.slice(0, 10));
  setIsLoading(false);
  }
 };

  return (
    <>
    <Header />
    <BackToTop />
    {isLoading ? (
    <Loader />
    ) : (
    <div>
        
        <Search search = {search} onSearchChange ={onSearchChange}/>
        <TabsComponent coins={search ? filterdCoins : paginatedCoins} />
        {!search && (
        <PaginationComponent 
        page = {page} 
        handlePageChange={handlePageChange}
        />
        )}   
    </div>
    )}
    <Footer />
    </>
  );
}

export default DashboardPage;