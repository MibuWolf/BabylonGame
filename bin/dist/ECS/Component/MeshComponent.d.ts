import { AbstractMesh } from "babylonjs";
export declare class MeshComponent {
    resPath: string;
    meshName: string;
    mesh: AbstractMesh;
    subMeshs: Array<string>;
    constructor();
    Initialize(_resPath?: string, _meshName?: string, _mesh?: AbstractMesh): void;
}
