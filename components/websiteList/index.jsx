import { Fragment, useEffect, useState } from 'react';
import CustomTable from '../table';
import { getAllBlogs } from '@/Services/ApiServices';
import { CircularProgress } from '@mui/material';

const WebsiteList = ({ sitePath }) => {
  const [websites, setWebsites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await getAllBlogs();
      console.log(response.data);
      setWebsites(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      throw new Error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    { id: 'name', label: 'Website Name' },
    { id: 'category', label: 'Category' },
  ];

  const rows = websites.map((website) => {
    return {
      name: website.name,
      category: website.category,
    };
  });
  console.log(rows, 'rows');

  return (
    <Fragment>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <CustomTable
          rows={rows}
          columns={columns}
          maxHeight={550}
          width={'calc(100vw - 25px)'}
          linkCell="name"
          path={sitePath}
        />
      )}
    </Fragment>
  );
};

export default WebsiteList;
