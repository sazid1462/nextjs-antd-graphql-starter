import React from 'react';
import { Button } from 'antd';
import Link from 'next/link';
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig();
const { DASHBOARD_PATH } = publicRuntimeConfig;
import ErrorLayout from "../layout/error_layout/ErrorLayout";
import * as PropTypes from "prop-types";

const ErrorPage = ({ status, subTitle }) => {
    return (
      <ErrorLayout status={status} subTitle={subTitle}>
        <Link href={DASHBOARD_PATH}>
          <Button>
                    Go To Dashboard
          </Button>
        </Link>
      </ErrorLayout>
    );
};

ErrorPage.propTypes = {
    status: PropTypes.number.isRequired,
    subTitle: PropTypes.string.isRequired
};

export default ErrorPage;
