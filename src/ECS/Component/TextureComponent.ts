import { AbstractMesh, Texture } from 'babylonjs';
import { TextureData } from '../VO/TextureData';
export class TextureComponent
{
    public texs: Map<string, TextureData>;
    public needUpdate: boolean;
    public constructor()
    {
        this.texs = new Map<string, TextureData>();
        this.needUpdate = false;
    }

    /**
     * Initialize
     */
    public SetTextureInfo( _subMeshName: string = "", _baseTexPath: string = "", _normalTexPath: string = "",
        _metroughTexPath: string = "", _environmentTexPath: string = "", _colorIDTexPath: string = "", _colorIDTex: Texture = null )
    {
        let texData = new TextureData();
        texData.Initialize( _subMeshName, _baseTexPath, _normalTexPath, _metroughTexPath, _environmentTexPath, _colorIDTexPath, _colorIDTex )

        this.texs.set( _subMeshName, texData );

        this.needUpdate = true;
    }


    /**
     * GetTextureData
        _subMeshName:string
     */
    public GetTextureData( _subMeshName: string ): TextureData
    {
        if ( !this.texs.has( _subMeshName ) )
            return null;

        let texData: TextureData = this.texs.get( _subMeshName );
        return texData;
    }


}