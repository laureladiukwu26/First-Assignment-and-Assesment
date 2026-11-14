function diffObjects(oldObj, newObj) {
    const result = {
        added: {},
        removed: {},
        changed: {}
    };

    const oldKeys = Object.keys(oldObj);
    const newKeys = Object.keys(newObj);

    for (const key of newKeys) {
        if (!(key in oldObj)) {
            result.added[key] = newObj[key];
        } else if (oldObj[key] !== newObj[key]) {
            result.changed[key] = {
                from: oldObj[key],
                to: newObj[key]
            };
        }
    }

    for (const key of oldKeys) {
        if (!(key in newObj)) {
            result.removed[key] = oldObj[key];
        }
    }

    return result;
}

console.log(
    diffObjects(
        { name: 'Setemi', role: 'Engineer', country: 'Jamaica' },
        { name: 'Setemi', role: 'Senior Engineer', city: 'Kingston' }
    )
);