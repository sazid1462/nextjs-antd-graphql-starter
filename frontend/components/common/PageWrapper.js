import React, { Fragment } from 'react';
import * as PropTypes from 'prop-types';

const PageWrapper = ({ pageHeader, children }) => {
    return (
      <Fragment>
        <div className="page_header">
          {pageHeader}
        </div>
        <div className="page_content">
          {children}
        </div>
      </Fragment>
    );
};

PageWrapper.propTypes = {
    pageHeader: PropTypes.object,
    children: PropTypes.object
};

export default PageWrapper;
