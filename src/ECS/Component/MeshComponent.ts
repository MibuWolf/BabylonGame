import { AbstractMesh, SubMesh } from "babylonjs";
export class MeshComponent
{

    public resPath: string;
    public meshName: string;
    public mesh: AbstractMesh;

    public subMeshs: Array<string>

    public constructor()
    {

    }

    /**
     * Initialize
     */
    public Initialize( _resPath: string = "", _meshName: string = "", _mesh: AbstractMesh = null )
    {
        this.resPath = _resPath;
        this.meshName = _meshName;
        this.mesh = _mesh;
    }

}