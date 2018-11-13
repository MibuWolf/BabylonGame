import { ListIteratingSystem } from '../../ash';
import { EditorNode } from '../Nodes/EditorNode';
import { Mesh } from 'babylonjs';
export declare class EditorShowSystem extends ListIteratingSystem<EditorNode> {
    private m_meshEditor;
    constructor();
    nodeAdded(node: EditorNode): void;
    nodeRemoved(node: EditorNode): void;
    updateNode(node: EditorNode, delta: number): void;
    initEditorControl(mesh: Mesh): void;
}
