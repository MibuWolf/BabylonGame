import { ListIteratingSystem } from '../../ash';
import { MeshRenderNode } from '../Nodes/MeshRenderNode';
import { SceneManager } from '../../Manager/SceneManager';
import 'babylonjs-loaders';
import { SceneLoader } from 'babylonjs';

export class MeshRenderSystem extends ListIteratingSystem<MeshRenderNode>
{
    constructor()
    {
        super( MeshRenderNode );
    }
    protected nodeAdded = ( node: MeshRenderNode ): void =>
    {
        var scene = SceneManager.GetInstance().GetScene();

        if ( scene == null || !node.mesh.IsValid() )
        {
            console.log( "Data is Not init!" );
            return;
        }

        SceneLoader.ImportMesh( "", node.mesh.GetMeshPath(), node.mesh.GetMeshName(), scene, function ( newMeshes )
        {
            var meshModel = newMeshes[ 0 ];

            if ( meshModel != null )
            {
                meshModel.position.x = node.mesh.GetPositionX()
                meshModel.position.y = node.mesh.GetPositionY();
                meshModel.position.z = node.mesh.GetPositionZ();
                node.mesh.mesh = meshModel;

            }
            else
            {
                console.log( "Cannot Find Mesh!" )
            }

        }, function ( eve ) { },

            function ( scene, message, exc )
            {
                console.log( message )
                console.log( exc )
            }
        );
    }


    protected nodeRemoved = ( node: MeshRenderNode ): void =>
    {
        if ( node.mesh.mesh == null )
            return;

        node.mesh.mesh.dispose( false, true );
        node.mesh.mesh = null;
    }
    public updateNode( node: MeshRenderNode, delta: number ): void { }
}