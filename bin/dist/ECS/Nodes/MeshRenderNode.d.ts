import { Node } from "../../ash";
import { MeshComponent } from "../Component/MeshComponent";
import { UUIDComponent } from "../Component/UUIDComponent";
export declare class MeshRenderNode extends Node<MeshRenderNode> {
    uuid: UUIDComponent;
    mesh: MeshComponent;
}
