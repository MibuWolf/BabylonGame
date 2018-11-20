import { Node, keep } from "../../ash";
import { MeshComponent } from "../Component/MeshComponent";
import { TextureComponent } from "../Component/TextureComponent";
import { UUIDComponent } from "../Component/UUIDComponent";
export class TextureNode extends Node<TextureNode>
{
    @keep( UUIDComponent )
    public uuid: UUIDComponent;
    @keep( MeshComponent )
    public mesh: MeshComponent;

    @keep( TextureComponent )
    public texture: TextureComponent;
}