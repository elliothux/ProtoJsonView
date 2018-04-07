
const types = [
    'int', 'double', 'float', 'int32', 'int64', 'uint32', 'uint64',
    'sint32', 'sint64', 'fixed32', 'fixed64', 'sfixed32', 'sfixed64',
    'boolean', 'string', 'bytes', 'enum', 'null', 'message'
];

const typesMap = {
    INT: 'int',
    DOUBLE: 'double',
    FLOAT: 'float',
    INT32: 'int32',
    INT64: 'int64',
    UINT32: 'uint32',
    UINT64: 'uint64',
    SINT32: 'sint32',
    SINT64: 'sint64',
    FIXED32: 'fixed32',
    FIXED64: 'fixed64',
    SFIXED32: 'sfixed32',
    SFIXED64: 'sfixed64',

    BOOLEAN: 'boolean',
    STRING: 'string',
    BYTES: 'bytes',
    ENUM: 'enum',
    NULL: 'null',

    MESSAGE: 'message'
};


function preventDefault(e) {
    if (e) {
        if (e.preventDefault) {
            e.preventDefault();
        }
        if (e.stopPropagation) {
            e.stopPropagation();
        }
        if (e.nativeEvent && e.nativeEvent.stopImmediatePropagation) {
            e.nativeEvent.stopImmediatePropagation();
        }
    }
}

function isNumber(type) {
    const valid = [
        'int', 'double', 'float', 'int32', 'int64',
        'uint32', 'uint64', 'sint32', 'sint64',
        'fixed32', 'fixed64', 'sfixed32', 'sfixed64'
    ];
    return valid.includes(type);
}

function isNull(type) {
    return type === 'null';
}

function isString(type) {
    const valid = [typesMap.STRING, typesMap.BYTES];
    return valid.includes(type);
}



export {
    types,
    typesMap,
    preventDefault,
    isNumber,
    isString,
    isNull
};
