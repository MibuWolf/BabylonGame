import { AbstractMesh } from "babylonjs";
import { MeshData } from '../../VO/MeshData';
export declare class MeshComponent {
    meshData: MeshData;
    mesh: AbstractMesh;
    constructor();
    Initialize(path?: string, x?: number, y?: number, z?: number, meshModel?: AbstractMesh): void;
    IsValid(): boolean;
    GetMeshPath(): string;
    GetMeshName(): string;
    GetPositionX(): number;
    GetPositionY(): number;
    GetPositionZ(): number;
}
