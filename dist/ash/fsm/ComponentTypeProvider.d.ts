import { ClassType } from '../types';
import { IComponentProvider } from './IComponentProvider';
export declare class ComponentTypeProvider<TComponent> implements IComponentProvider<TComponent> {
    private componentType;
    constructor(type: ClassType<TComponent>);
    getComponent(): TComponent;
    readonly identifier: any;
}
