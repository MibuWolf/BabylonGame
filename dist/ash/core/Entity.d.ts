import { Signal2 } from '../signals/Signal2';
import { ClassType } from '../types';
export declare class Entity {
    private static nameCount;
    private pName;
    componentAdded: Signal2<Entity, ClassType<any>>;
    componentRemoved: Signal2<Entity, ClassType<any>>;
    nameChanged: Signal2<Entity, string>;
    previous: Entity | null;
    next: Entity | null;
    components: Map<ClassType<any>, any>;
    constructor(name?: string);
    name: string;
    add<T>(component: T, componentClass?: ClassType<T> | null): this;
    remove<T>(componentClass: ClassType<T>): T | null;
    get<T>(componentClass: ClassType<T>): T | null;
    getAll(): any[];
    has<T>(componentClass: ClassType<T>): boolean;
}
