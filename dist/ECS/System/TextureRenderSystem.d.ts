import { ListIteratingSystem } from '../../ash';
import { TextureNode } from '../Nodes/TextureNode';
import 'babylonjs-loaders';
export declare class TextureRenderSystem extends ListIteratingSystem<TextureNode> {
    constructor();
    protected nodeAdded: (node: TextureNode) => void;
    nodeRemoved: (node: TextureNode) => void;
    updateNode(node: TextureNode, delta: number): void;
    updateTexture(node: TextureNode): void;
    private updateMaterial;
}
