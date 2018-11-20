import { Texture } from 'babylonjs';
export class TextureData
{
    public subMeshName: string;
    public baseTexPath: string;
    public normalTexPath: string;
    public metroughTexPath: string;
    public environmentTexPath: string;
    public colorIDTexPath: string;
    public colorIDTex: Texture;

    public constructor()
    {

    }

    /**
     * Initialize
     */
    public Initialize( _subMeshName: string = "", _baseTex: string = "", _normalTex: string = "",
        _metroughTex: string = "", _environmentTex: string = "", _colorTexPath: string, _colorIDTex: Texture = null )
    {
        this.subMeshName = _subMeshName;
        this.baseTexPath = _baseTex;
        this.normalTexPath = _normalTex;
        this.metroughTexPath = _metroughTex;
        this.environmentTexPath = _environmentTex;
        this.colorIDTexPath = _colorTexPath;
        this.colorIDTex = _colorIDTex;
    }


}