import { Engine, Entity } from '../ash';
export declare class EntityManager {
    private static instance;
    private ecsEngine;
    private constructor();
    static GetInstance(): EntityManager;
    Initialize(): void;
    GetECSEngine(): Engine;
    CreateMeshEntity(meshID: string, meshPath: string, posX?: number, posY?: number, posZ?: number): void;
    ClearAllMesh(): void;
    GetEntityByUUID(uUid: string): Entity;
}
