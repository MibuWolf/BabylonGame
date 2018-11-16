import { ListIteratingSystem } from '../../ash';
import { MeshRenderNode } from '../Nodes/MeshRenderNode';
import 'babylonjs-loaders';
export declare class MeshRenderSystem extends ListIteratingSystem<MeshRenderNode> {
    constructor();
    protected nodeAdded: (node: MeshRenderNode) => void;
    protected nodeRemoved: (node: MeshRenderNode) => void;
    updateNode(node: MeshRenderNode, delta: number): void;
}
