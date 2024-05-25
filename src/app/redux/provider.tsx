"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import React from 'react';

type Props = {
    children: React.ReactNode
}

export const Providers = (props: Props): React.ReactNode => {
    const {children} = props;

    return <Provider store={store}>{children}</Provider>;
}
