import React, { Fragment } from 'react'
import FullLayout from '../../../../components/layouts/fullLayout';
import WebsiteList from '../../../../components/websiteList';


const ImagePage = () => {
    return (

        <Fragment>
            <WebsiteList sitePath='/admin/image/image-list/' />
        </Fragment>
    )
}

ImagePage.getLayout = function getLayout(page) {
    return <FullLayout>{page}</FullLayout>;
};

export default ImagePage;