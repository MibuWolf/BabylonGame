export declare type ClassType<T> = {
    new (...args: any[]): T;
};
export declare type NodeClassType<TNode> = {
    new (): TNode;
};
export declare type NativeType = string | number | boolean;
