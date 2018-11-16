import { Node } from "../../ash";
import { MeshComponent } from "../Component/MeshComponent";
import { TextureComponent } from "../Component/TextureComponent";
export declare class TextureNode extends Node<TextureNode> {
    mesh: MeshComponent;
    texture: TextureComponent;
}
