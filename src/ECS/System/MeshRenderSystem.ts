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

        if ( scene == null )
        {
            console.log( "SceneManaer is Not init!" );
            return;
        }

        SceneLoader.ImportMesh( "", node.mesh.resPath, node.mesh.meshName, scene, function ( newMeshes )
        {
            var meshModel = newMeshes[ 0 ];

            if ( meshModel != null )
            {
                if ( node.mesh.subMeshs = null )
                {
                    node.mesh.subMeshs.length = 0;
                    node.mesh.subMeshs = null;
                }

                node.mesh.subMeshs = new Array<string>( meshModel.subMeshes.length );

                for ( let index = 0; index < meshModel.subMeshes.length; index++ )
                {
                    node.mesh.subMeshs[ index ] = meshModel.subMeshes[ index ].getMesh().name;
                }

                meshModel.position.x = node.pos.posX
                meshModel.position.y = node.pos.posY;
                meshModel.position.z = node.pos.posZ;
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
        node.mesh.subMeshs.length = 0;

        if ( node.mesh.mesh == null )
            return;

        node.mesh.mesh.dispose( false, true );
        node.mesh.mesh = null;
    }
    public updateNode( node: MeshRenderNode, delta: number ): void { }
}