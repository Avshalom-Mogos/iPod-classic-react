import * as React from 'react';

export const useTypedContext = <T>(myContext: React.Context<T | null>): T => {
    const context = React.useContext(myContext)
    if (context === null) {
        throw new Error("context is undefined")
    }

    return context
};
