import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
    namespace: 'annotorepl',
    enableCache: true,
    plugins: [
        sass(),
    ],
    devServer: {
        port: 8080,
    },
    outputTargets: [
        {
            type: 'www',
            serviceWorker: null,
        }
    ],
    extras: {
        cssVarsShim: false,
    },
};
