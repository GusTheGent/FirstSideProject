import React, { HtmlHTMLAttributes } from "react";


export type BoxProps =
    & React.HTMLProps<HTMLDivElement>
    &  {
        component?: React.ElementType;
        ref?: React.Ref<unknown>;
    }

