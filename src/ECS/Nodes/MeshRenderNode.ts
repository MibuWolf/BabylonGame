import { Node, keep } from "../../ash";
import { MeshComponent } from "../Component/MeshComponent";
import { UUIDComponent } from "../Component/UUIDComponent";
export class MeshRenderNode extends Node<MeshRenderNode>
{
    @keep( UUIDComponent )
    public uuid: UUIDComponent;
    @keep( MeshComponent )
    public mesh: MeshComponent;
}