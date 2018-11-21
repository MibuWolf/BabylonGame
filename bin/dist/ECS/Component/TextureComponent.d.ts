import { TextureData } from '../../VO/TextureData';
export declare class TextureComponent {
    texs: Map<string, TextureData>;
    needUpdate: boolean;
    constructor();
    SetTextureInfo(_subMeshName?: string, _baseTexPath?: string, _normalTexPath?: string, _metroughTexPath?: string, _environmentTexPath?: string): void;
    GetTextureData(_subMeshName: string): TextureData;
}
