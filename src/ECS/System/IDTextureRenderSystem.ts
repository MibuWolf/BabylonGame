import { ListIteratingSystem } from '../../ash';
import { IDTextureNode } from '../Nodes/IDTextureNode';
import { SceneManager } from '../../Manager/SceneManager';
import 'babylonjs-loaders';
import { AbstractMesh, PBRMetallicRoughnessMaterial, Texture, Scene } from 'babylonjs';


export class IDTextureRenderSystem extends ListIteratingSystem<IDTextureNode>
{
    constructor()
    {
        super( IDTextureNode );
    }

    protected nodeAdded = ( node: IDTextureNode ): void =>
    {
        var scene = SceneManager.GetInstance().GetScene();

        if ( scene == null )
        {
            console.log( "SceneManaer is Not init!" );
            return;
        }
    }

    public nodeRemoved = ( node: IDTextureNode ): void =>
    {

    }
    public updateNode( node: IDTextureNode, delta: number ): void
    {

    }

}