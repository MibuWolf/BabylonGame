import { Node } from "../../ash";
import { PostionComponent } from '../Component/PostionComponent';
import { MeshComponent } from "../Component/MeshComponent";
export declare class MeshRenderNode extends Node<MeshRenderNode> {
    pos: PostionComponent;
    mesh: MeshComponent;
}
