"use client";
// SearchContext.js
import { createContext,  useState, useEffect } from "react";

export const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(8);
  const [loading, setLoading] = useState(false);
  const [filteredData, setFilteredData] = useState([]); // Initially, filteredData is an empty array

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/data");
        const data = await response.json();
        setData(data.articles);
        setFilteredData(data.articles); // Initialize filteredData with the entire data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleFilterData = (searchQuery) => {
    
    // Apply filtering logic based on the searchQuery
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.author && item.author.toLowerCase().includes(searchQuery.toLowerCase()))
      // Add more fields if needed
    );
    setFilteredData(filteredData);
    setCurrentPage(1); // Reset current page when applying new filters
  };
  

  return (
    <GlobalContext.Provider
      value={{
        data,
        setData,
        currentPage,
        setCurrentPage,
        pageSize,
        loading,
        setLoading,
        handlePageChange,
        searchQuery,
        setSearchQuery,
        filteredData,
        handleFilterData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContext;
