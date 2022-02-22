import React from 'react';
import { BoxProps } from './types';


export const Box: React.FunctionComponent<BoxProps> = React.memo((props) => {
    const {
        className,
        children,
        component,
    } = props;

    return(
        <div className={className}>
            {children}
            {component}
        </div>
    );
})


