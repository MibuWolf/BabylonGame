import { AbstractMesh } from "babylonjs";
import { MeshData } from '../../VO/MeshData';

export class MeshComponent
{
    public meshData: MeshData;
    public mesh: AbstractMesh;

    public constructor()
    {
        this.mesh = null;
        this.meshData = null;
    }

    /**
     * Initialize
     */
    public Initialize( path: string = "", x: number = 0.0, y: number = 0.0, z: number = 0.0, meshModel: AbstractMesh = null )
    {
        this.meshData = null;
        this.meshData = new MeshData();
        this.meshData.Initialize( path, x, y, z );
        this.mesh = meshModel;
    }

    public IsValid(): boolean
    {
        return !( this.meshData == null );
    }

    public GetMeshPath(): string
    {
        if ( !this.IsValid() )
            return null;

        let pos = this.meshData.meshPath.lastIndexOf( '/' );
        return this.meshData.meshPath.substring( 0, pos );
    }

    public GetMeshName(): string
    {
        if ( !this.IsValid() )
            return null;

        let pos = this.meshData.meshPath.lastIndexOf( '/' );
        return this.meshData.meshPath.substring( pos );
    }

    public GetPositionX(): number
    {
        if ( !this.IsValid() )
            return 0.0;

        return this.meshData.posX;
    }


    public GetPositionY(): number
    {
        if ( !this.IsValid() )
            return 0.0;

        return this.meshData.posY;
    }


    public GetPositionZ(): number
    {
        if ( !this.IsValid() )
            return 0.0;

        return this.meshData.posZ;
    }
}