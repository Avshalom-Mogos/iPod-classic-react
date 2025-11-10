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

export const getPublicImagePath = (path: string): string => {
    // If path already starts with http/https, return as is (external URLs)
    if (path.startsWith('http')) {
        return path;
    }
    // If path already starts with PUBLIC_URL, return as is
    const publicUrl = process.env.PUBLIC_URL || '';
    if (publicUrl && path.startsWith(publicUrl)) {
        return path;
    }
    // Remove leading ./ if present and prepend PUBLIC_URL
    const cleanPath = path.replace(/^\.\//, '');
    return publicUrl ? `${publicUrl}/${cleanPath}` : `/${cleanPath}`;
};
