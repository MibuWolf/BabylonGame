import { System } from '../core/System';
import { ClassType } from '../types';
import { ISystemProvider } from './ISystemProvider';
export declare class SystemSingletonProvider<TSystem extends System> implements ISystemProvider<TSystem> {
    private componentType;
    private instance?;
    private systemPriority;
    constructor(type: ClassType<TSystem>);
    getSystem(): TSystem;
    readonly identifier: any;
    priority: number;
}
