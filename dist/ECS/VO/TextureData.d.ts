import { Texture } from 'babylonjs';
export declare class TextureData {
    subMeshName: string;
    baseTexPath: string;
    normalTexPath: string;
    metroughTexPath: string;
    environmentTexPath: string;
    colorIDTexPath: string;
    colorIDTex: Texture;
    needUpdate: boolean;
    constructor();
    Initialize(_subMeshName: string, _baseTex: string, _normalTex: string, _metroughTex: string, _environmentTex: string, _colorTexPath: string, _colorIDTex?: Texture): void;
}
