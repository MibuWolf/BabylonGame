import { Texture } from 'babylonjs';
import { TextureData } from '../../VO/TextureData';
export declare class TextureComponent {
    texs: Map<string, TextureData>;
    constructor();
    SetTextureInfo(_subMeshName?: string, _baseTexPath?: string, _normalTexPath?: string, _metroughTexPath?: string, _environmentTexPath?: string, _colorIDTexPath?: string, _colorIDTex?: Texture): void;
    GetTextureData(_subMeshName: string): TextureData;
}
