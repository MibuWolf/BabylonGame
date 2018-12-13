export declare class TextureData {
    subMeshName: string;
    baseTexPath: string;
    normalTexPath: string;
    metroughTexPath: string;
    occlusionTexPath: string;
    emissiveTexPath: string;
    environmentTexPath: string;
    needUpdate: boolean;
    constructor(_subMeshName?: string, _baseTex?: string, _normalTex?: string, _metroughTex?: string, _occlusionTex?: string, _emissiveTex?: string, _environmentTex?: string);
    Initialize(_subMeshName?: string, _baseTex?: string, _normalTex?: string, _metroughTex?: string, _occlusionTex?: string, _emissiveTex?: string, _environmentTex?: string): void;
}
