import { Entity } from './Entity';
export declare abstract class Node<TNode> {
    entity: Entity | null;
    previous: TNode | null;
    next: TNode | null;
}
