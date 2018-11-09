import { Node, keep } from "../../ash";
import { PostionComponent } from '../Component/PostionComponent';
import { MeshComponent } from "../Component/MeshComponent";
import { EditorComponent } from "../Component/EditorComponent";
export class EditorNode extends Node<EditorNode>
{
    @keep( PostionComponent )
    public pos: PostionComponent;
    @keep( MeshComponent )
    public mesh: MeshComponent;

    @keep( EditorComponent )
    public editor: EditorComponent;
}