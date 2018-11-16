import { ClassType } from '../types';
export declare class ComponentPool {
    private static pools;
    private static getPool;
    static get<T>(componentClass: ClassType<T>): T;
    static dispose<T>(component: T): void;
    static empty(): void;
}
