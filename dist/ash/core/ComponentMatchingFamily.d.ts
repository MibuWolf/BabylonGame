import { Engine } from './Engine';
import { Entity } from './Entity';
import { IFamily } from './IFamily';
import { Node } from './Node';
import { NodeList } from './NodeList';
import { ClassType, NodeClassType } from '../types';
export declare class ComponentMatchingFamily<TNode extends Node<TNode>> implements IFamily<TNode> {
    private nodes;
    private entities;
    private nodeClass;
    components: Map<ClassType<any>, string>;
    private nodePool;
    private engine;
    constructor(nodeClass: NodeClassType<TNode>, engine: Engine);
    private init;
    readonly nodeList: NodeList<TNode>;
    newEntity(entity: Entity): void;
    componentAddedToEntity(entity: Entity, componentClass: ClassType<any>): void;
    componentRemovedFromEntity(entity: Entity, componentClass: ClassType<any>): void;
    removeEntity(entity: Entity): void;
    private addIfMatch;
    private removeIfMatch;
    private releaseNodePoolCache;
    cleanUp(): void;
}
export declare function keep(type: ClassType<any>): PropertyDecorator;
