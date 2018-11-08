import { IComponentProvider } from './IComponentProvider';
import { StateComponentMapping } from './StateComponentMapping';
import { ClassType } from '../types';
export declare class EntityState {
    providers: Map<ClassType<any>, IComponentProvider<any>>;
    add<TComponent>(type: ClassType<TComponent>): StateComponentMapping<TComponent>;
    get<TComponent>(type: ClassType<TComponent>): IComponentProvider<TComponent> | null;
    has<TComponent>(type: ClassType<TComponent>): boolean;
}
