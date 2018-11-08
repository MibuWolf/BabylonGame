import { AbstractMesh } from "babylonjs";
export class MeshComponent
{

    private resPath: string;
    private meshName: string;
    private baseTex: string;
    private normalTex: string;
    private metroughTex: string;
    private environmentTex: string;
    private mesh: AbstractMesh;

    public constructor()
    {

    }

    /**
     * Initialize
     */
    public Initialize( _resPath: string = "", _meshName: string = "", _baseTex: string = "", _normalTex: string = "",
        _metroughTex: string = "", _environmentTex: string = "", _mesh: AbstractMesh = null )
    {
        this.resPath = _resPath;
        this.meshName = _meshName;
        this.baseTex = _baseTex;
        this.normalTex = _normalTex;
        this.metroughTex = _metroughTex;
        this.environmentTex = _environmentTex;
        this.mesh = _mesh;
    }

    /**
     * SetMesh
     *  设置资源路径
     */
    public SetMeshName( path: string, resName: string ): void
    {
        this.resPath = path;
        this.meshName = resName;
    }


    /**
     * SetTexture
     *  设置模型贴图
     */
    public SetTexture( _baseTex: string = "", _normalTex: string = "",
        _metroughTex: string = "", _environmentTex: string = "" ): void
    {
        this.baseTex = _baseTex;
        this.normalTex = _normalTex;
        this.metroughTex = _metroughTex;
        this.environmentTex = _environmentTex;
    }


    /**
    * SetMeshModel
    *  设置模型资源
    */
    public SetMeshModel( _mesh: AbstractMesh ): void
    {
        this.mesh = _mesh;
    }

    /**
     * GetResPath
        获取资源路径
    */
    public GetResPath(): string
    {
        return this.resPath;
    }


    /**
     * GetMeshName
        获取模型名
    */
    public GetMeshName(): string
    {
        return this.meshName;
    }


    /**
     * GetBaseTextrue
        获取basecolorTex资源路径
    */
    public GetBaseTexture(): string
    {
        return this.baseTex;
    }


    /**
     * GetNormalTextrue
        获取normalTex资源路径
    */
    public GetNormalTexture(): string
    {
        return this.normalTex;
    }


    /**
     * GetMetroughTexture
        获取metroughTex资源路径
    */
    public GetMetroughTexture(): string
    {
        return this.metroughTex;
    }


    /**
     * GetEnvironmentTexture
        获取环境贴图资源路径
    */
    public GetEnvironmentTexture(): string
    {
        return this.environmentTex;
    }


    /**
     * GetMeshModel
        获取模型
    */
    public GetMeshModel(): AbstractMesh
    {
        return this.mesh;
    }

}