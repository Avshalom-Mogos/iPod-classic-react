type ConditionalClass = { [key in string]: boolean };
type SimpleClass = string;

type ClassNamesArg = SimpleClass | ConditionalClass;

export const classNames = (...args: ClassNamesArg[]): string => {
    let classes: string[] = [];

    args.forEach(arg => {
        if (typeof arg === 'string') {
            classes = [...classes, arg]
        } else {
            const nestedClasses = handleConditionalClass(arg);
            classes = [...classes, ...nestedClasses]
        }
    });

    return classes.join(' ');
};


const handleConditionalClass = (conditionalClass: ConditionalClass): string[] => {

    const classes: string[] = [];

    const helper = (helperInput: ConditionalClass) => {
        const classKeys = Object.keys(helperInput);
        if (classKeys.length === 0) return;

        const firstClassKey = classKeys[0]
        if (helperInput[firstClassKey]) {
            classes.push(firstClassKey);
        }

        const { [firstClassKey]: _, ...rest } = helperInput;
        helper(rest);
    };

    helper(conditionalClass);

    return classes;
};
