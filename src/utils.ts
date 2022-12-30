export const classNames = (conditions: { [key in string]: boolean }): string => {
    const classes = [];
    for (const className in conditions) {
        if (conditions[className]) {
            classes.push(className);
        }
    }

    return classes.join(' ');
};
