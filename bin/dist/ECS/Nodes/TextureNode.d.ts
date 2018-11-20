import { Node } from "../../ash";
import { MeshComponent } from "../Component/MeshComponent";
import { TextureComponent } from "../Component/TextureComponent";
import { UUIDComponent } from "../Component/UUIDComponent";
export declare class TextureNode extends Node<TextureNode> {
    uuid: UUIDComponent;
    mesh: MeshComponent;
    texture: TextureComponent;
}
