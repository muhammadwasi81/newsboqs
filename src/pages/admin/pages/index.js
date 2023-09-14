import React, { Fragment } from 'react'
import FullLayout from '../../../../components/layouts/fullLayout';
import WebsiteList from '../../../../components/websiteList';


const Pages = () => {
    return (
        <Fragment>
            <WebsiteList sitePath='/admin/pages/pages-list/' />
        </Fragment>
    )
}

Pages.getLayout = function getLayout(page) {
    return <FullLayout>{page}</FullLayout>;
};

export default Pages;