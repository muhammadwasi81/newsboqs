import React, { Fragment } from 'react';
import FullLayout from '../../../../components/layouts/fullLayout';
import WebsiteList from '../../../../components/websiteList';

const Tags = () => {
  return (
    <Fragment>
      <WebsiteList sitePath="/admin/tags/tags-list/" />
    </Fragment>
  );
};

Tags.getLayout = function getLayout(page) {
  return <FullLayout>{page}</FullLayout>;
};

export default Tags;
