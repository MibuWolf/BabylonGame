import { Node } from './Node';
import { ClassType, NodeClassType } from '../types';
export declare class NodePool<TNode extends Node<TNode>> {
    private tail;
    private nodeClass;
    private cacheTail;
    private components;
    constructor(nodeClass: NodeClassType<TNode>, components: Map<ClassType<any>, string>);
    get(): TNode;
    dispose(node: TNode): void;
    cache(node: TNode): void;
    releaseCache(): void;
}
