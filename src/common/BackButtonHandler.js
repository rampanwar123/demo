import React, { useEffect } from 'react';
import { BackHandler } from 'react-native';

/* useBackButton */
export default function useBackButton(handler) {
    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", handler);

        return () => {
            BackHandler.removeEventListener(
                "hardwareBackPress",
                handler
            );
        };
    }, [handler]);
}