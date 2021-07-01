import React, { Fragment } from 'react';

const FontAwesomeIcon = ({ icon = 'ellipsis-h', text = false }) => (
    <Fragment>
        <i className={`fas fa-${icon}`} />
        {Boolean(text) && <span> &nbsp; {text}</span>}
    </Fragment>
);

export default FontAwesomeIcon;