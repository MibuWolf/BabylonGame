import { ClassType } from '../types';
import { EntityState } from './EntityState';
import { IComponentProvider } from './IComponentProvider';
export declare class StateComponentMapping<TComponent> {
    private componentType;
    private creatingState;
    private provider;
    constructor(creatingState: EntityState, type: ClassType<TComponent>);
    withInstance(component: TComponent): this;
    withType(type: ClassType<TComponent>): this;
    withSingleton(type?: ClassType<any>): this;
    withMethod(method: () => TComponent): this;
    withProvider(provider: IComponentProvider<TComponent>): this;
    add<TNextComponent>(type: ClassType<TNextComponent>): StateComponentMapping<TNextComponent>;
    private setProvider;
}
