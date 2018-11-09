import { ListIteratingSystem } from '../../ash';
import { EditorNode } from '../Nodes/EditorNode';
import { EditControl } from '../../Editor/EditControl';


export class EditorShowSystem extends ListIteratingSystem<EditorNode>
{
    private m_meshEditor: EditControl
    constructor()
    {
        super( EditorNode );
        this.m_meshEditor = null;
    }

    public nodeAdded( node: EditorNode ): void
    {
        if ( this.m_meshEditor == null )
            this.m_meshEditor = new EditControl()
    }

    public nodeRemoved( node: EditorNode ): void
    {

    }
    public updateNode( node: EditorNode, delta: number ): void { }
}
