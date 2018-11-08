import { ListIteratingSystem } from '../../ash';
import { MeshRenderNode } from '../Nodes/MeshRenderNode';
import 'babylonjs-loaders';
export declare class MeshRenderSystem extends ListIteratingSystem<MeshRenderNode> {
    constructor();
    nodeAdded(node: MeshRenderNode): void;
    nodeRemoved(node: MeshRenderNode): void;
    updateNode(node: MeshRenderNode, delta: number): void;
}
