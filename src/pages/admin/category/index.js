import React, { Fragment } from 'react'
import FullLayout from '../../../../components/layouts/fullLayout';
import WebsiteList from '../../../../components/websiteList';


const Category = () => {
    return (

        <Fragment>
            <WebsiteList sitePath='/admin/category/category-list/' />
        </Fragment>
    )
}

Category.getLayout = function getLayout(page) {
    return <FullLayout>{page}</FullLayout>;
};

export default Category;