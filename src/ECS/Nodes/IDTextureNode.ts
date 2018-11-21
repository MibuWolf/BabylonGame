import { Node, keep } from "../../ash";
import { UUIDComponent } from "../Component/UUIDComponent";
import { MeshComponent } from '../Component/MeshComponent';
import { IDTextureComponent } from '../Component/IDTextureComponent';
export class IDTextureNode extends Node<IDTextureNode>
{
    @keep( UUIDComponent )
    public uuid: UUIDComponent;

    @keep( IDTextureComponent )
    public idTex: IDTextureComponent;

    @keep( MeshComponent )
    public mesh: MeshComponent;

}