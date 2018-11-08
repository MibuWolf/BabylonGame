import { AbstractMesh } from "babylonjs";
export declare class MeshComponent {
    private resPath;
    private meshName;
    private baseTex;
    private normalTex;
    private metroughTex;
    private environmentTex;
    private mesh;
    constructor();
    Initialize(_resPath?: string, _meshName?: string, _baseTex?: string, _normalTex?: string, _metroughTex?: string, _environmentTex?: string, _mesh?: AbstractMesh): void;
    SetMeshName(path: string, resName: string): void;
    SetTexture(_baseTex?: string, _normalTex?: string, _metroughTex?: string, _environmentTex?: string): void;
    SetMeshModel(_mesh: AbstractMesh): void;
    GetResPath(): string;
    GetMeshName(): string;
    GetBaseTexture(): string;
    GetNormalTexture(): string;
    GetMetroughTexture(): string;
    GetEnvironmentTexture(): string;
    GetMeshModel(): AbstractMesh;
}
