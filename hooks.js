import * as React from 'react';
export var useTypedContext = function (myContext) {
    var context = React.useContext(myContext);
    if (context === null) {
        throw new Error("context is undefined");
    }
    return context;
};
