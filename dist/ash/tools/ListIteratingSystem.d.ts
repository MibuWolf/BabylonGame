import { Engine } from '../core/Engine';
import { Node } from '../core/Node';
import { NodeList } from '../core/NodeList';
import { System } from '../core/System';
import { NodeClassType } from '../types';
export declare abstract class ListIteratingSystem<TNode extends Node<TNode>> extends System {
    protected nodeList: NodeList<TNode> | null;
    protected nodeClass: NodeClassType<TNode>;
    protected nodeAdded?: (node: Node<TNode>) => void;
    protected nodeRemoved?: (node: Node<TNode>) => void;
    constructor(nodeClass: NodeClassType<TNode>);
    addToEngine(engine: Engine): void;
    removeFromEngine(engine: Engine): void;
    update(time: number): void;
    abstract updateNode(node: Node<TNode>, delta: number): void;
}
