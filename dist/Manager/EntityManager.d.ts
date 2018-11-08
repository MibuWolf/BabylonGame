import { Engine } from '../ash';
export declare class EntityManager {
    private static instance;
    private ecsEngine;
    private constructor();
    static GetInstance(): EntityManager;
    Initialize(engine: Engine): void;
    CreateMeshEntity(resPath: string, meshName: string, baseTex: string, normalTex: string, metroughTex: string, environmentTex: string, posX?: number, posY?: number, posZ?: number): void;
}
