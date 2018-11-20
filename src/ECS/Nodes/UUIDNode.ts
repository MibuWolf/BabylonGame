import { Node, keep } from "../../ash";
import { UUIDComponent } from "../Component/UUIDComponent";
export class UUIDNode extends Node<UUIDNode>
{
    @keep( UUIDComponent )
    public uuid: UUIDComponent;
}