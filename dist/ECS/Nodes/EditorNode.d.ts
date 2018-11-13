import { Node } from "../../ash";
import { PostionComponent } from '../Component/PostionComponent';
import { MeshComponent } from "../Component/MeshComponent";
import { EditorComponent } from "../Component/EditorComponent";
export declare class EditorNode extends Node<EditorNode> {
    pos: PostionComponent;
    mesh: MeshComponent;
    editor: EditorComponent;
}
