import React, { Fragment } from 'react'
import FullLayout from '../../../../components/layouts/fullLayout';
import WebsiteList from '../../../../components/websiteList';


const Article = () => {
    return (
        <Fragment>
            <WebsiteList sitePath='/admin/article/article-list/' />
        </Fragment>
    )
}

Article.getLayout = function getLayout(page) {
    return <FullLayout>{page}</FullLayout>;
};

export default Article;