import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
const LazyLoadingList = ({ email, handleLogout }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetchMoreData();
  }, []);

  const fetchMoreData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`
      );
      const newData = response.data.data;
      setData((prevData) => [...prevData, ...newData]);
      setIsLoading(false);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      fetchMoreData();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <h1>Lazy Loading List</h1>
      <div className="p-4 box mt-3 text-center">
        Hello Welcome <br />
        {email}
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
      {data.map((item) => (
        <div key={item._id}>
          {/* Display the data from the API */}
          <p>{item?.name}</p>
        </div>
      ))}
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default LazyLoadingList;
