import { Texture } from 'babylonjs';
export class TextureData
{
    public subMeshName: string;
    public baseTexPath: string;
    public normalTexPath: string;
    public metroughTexPath: string;
    public occlusionTexPath: string;
    public emissiveTexPath: string;
    public environmentTexPath: string;
    public needUpdate: boolean;

    public constructor( _subMeshName: string = "", _baseTex: string = "", _normalTex: string = "",
        _metroughTex: string = "", _occlusionTex: string = "", _emissiveTex: string = "", _environmentTex: string = "" )
    {
        this.Initialize( _subMeshName, _baseTex, _normalTex, _metroughTex, _occlusionTex, _emissiveTex, _environmentTex );
    }

    /**
     * Initialize
     */
    public Initialize( _subMeshName: string = "", _baseTex: string = "", _normalTex: string = "",
        _metroughTex: string = "", _occlusionTex: string = "", _emissiveTex: string = "", _environmentTex: string = "" )
    {
        this.subMeshName = _subMeshName;
        this.baseTexPath = _baseTex;
        this.normalTexPath = _normalTex;
        this.metroughTexPath = _metroughTex;
        this.occlusionTexPath = _occlusionTex;
        this.emissiveTexPath = _emissiveTex;
        this.environmentTexPath = _environmentTex;
        this.needUpdate = true;
    }


}