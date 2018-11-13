import { Node, keep } from "../../ash";
import { MeshComponent } from "../Component/MeshComponent";
import { TextureComponent } from "../Component/TextureComponent";
export class TextureNode extends Node<TextureNode>
{
    @keep( MeshComponent )
    public mesh: MeshComponent;

    @keep( TextureComponent )
    public texture: TextureComponent;
}