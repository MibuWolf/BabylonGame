import { ClassType } from '../types';
import { IComponentProvider } from './IComponentProvider';
export declare class ComponentSingletonProvider<TComponent> implements IComponentProvider<TComponent> {
    private componentType;
    private instance?;
    constructor(type: ClassType<TComponent>);
    getComponent(): TComponent;
    readonly identifier: any;
}
