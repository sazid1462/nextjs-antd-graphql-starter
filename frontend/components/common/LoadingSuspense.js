import React from 'react';
import {Spin} from 'antd';
import {string} from "prop-types";

const LoadingSuspense = ({height, width}) => {

    const style = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height,
        width
    };

    return (
      <div style={style}>
        <Spin size="large" />
      </div>
    );
};

LoadingSuspense.defaultProps = {
    width: "100%",
    height: "100%"
};

LoadingSuspense.propTypes = {
    height: string,
    width: string
};

export default LoadingSuspense;
