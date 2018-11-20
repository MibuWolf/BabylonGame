import { ListIteratingSystem } from '../../ash';
import { UUIDNode } from '../Nodes/UUIDNode';
import { Engine } from '../../ash';
import { LogicWebSerivce } from '../../Manager/LogicWebSerivce';

export class UUIDSystem extends ListIteratingSystem<UUIDNode>
{
    constructor()
    {
        super( UUIDNode );
    }

    public addToEngine( engine: Engine ): void
    {
        super.addToEngine( engine );

        LogicWebSerivce.GetInstance().materialSignal
    }

    protected nodeAdded = ( node: UUIDNode ): void =>
    {

    }


    protected nodeRemoved = ( node: UUIDNode ): void =>
    {

    }
    public updateNode( node: UUIDNode, delta: number ): void { }
}