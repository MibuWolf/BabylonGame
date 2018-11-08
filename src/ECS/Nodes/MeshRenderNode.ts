import { Node, keep } from "../../ash";
import { PostionComponent } from '../Component/PostionComponent';
import { MeshComponent } from "../Component/MeshComponent";
export class MeshRenderNode extends Node<MeshRenderNode>
{
    @keep( PostionComponent )
    public pos: PostionComponent;
    @keep( MeshComponent )
    public mesh: MeshComponent;
}