import bigInteger from "big-integer";
declare const uvarint: {
    encode(integer: bigInteger.BigInteger): Uint8Array;
    decode(buf: Uint8Array): bigInteger.BigInteger;
};
declare const varint: {
    encode(integer: bigInteger.BigInteger): Uint8Array;
    decode(buf: Uint8Array): bigInteger.BigInteger;
};
declare function int64ToUint64(int64: bigInteger.BigInteger): bigInteger.BigInteger;
declare function numberToInt(num: number | bigInteger.BigInteger): bigInteger.BigInteger;
declare function mustInt8(int: number | bigInteger.BigInteger): void;
declare function mustUint8(int: number | bigInteger.BigInteger): void;
declare function mustInt16(int: number | bigInteger.BigInteger): void;
declare function mustUint16(int: number | bigInteger.BigInteger): void;
declare function mustInt32(int: number | bigInteger.BigInteger): void;
declare function mustUint32(int: number | bigInteger.BigInteger): void;
declare function mustInt64(int: number | bigInteger.BigInteger): void;
declare function mustUint64(int: number | bigInteger.BigInteger): void;
declare const constants: {
    MAX_UINT8: bigInteger.BigInteger;
    MAX_INT8: bigInteger.BigInteger;
    MIN_INT8: bigInteger.BigInteger;
    MAX_UINT16: bigInteger.BigInteger;
    MAX_INT16: bigInteger.BigInteger;
    MIN_INT16: bigInteger.BigInteger;
    MAX_UINT32: bigInteger.BigInteger;
    MAX_INT32: bigInteger.BigInteger;
    MIN_INT32: bigInteger.BigInteger;
    MAX_UINT64: bigInteger.BigInteger;
    MAX_INT64: bigInteger.BigInteger;
    MIN_INT64: bigInteger.BigInteger;
    int64ToUint64: typeof int64ToUint64;
    numberToInt: typeof numberToInt;
    mustInt8: typeof mustInt8;
    mustUint8: typeof mustUint8;
    mustInt16: typeof mustInt16;
    mustUint16: typeof mustUint16;
    mustInt32: typeof mustInt32;
    mustUint32: typeof mustUint32;
    mustInt64: typeof mustInt64;
    mustUint64: typeof mustUint64;
};
export { uvarint, varint, constants };
